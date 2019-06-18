import {Flavor, flavors} from "./flavors";
import * as React from "react";
import * as _ from "lodash";
import {Picker, PickerResult} from "./Picker";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

interface CompareState {
  RankedFlavors: Flavor[];
  ExcludedFlavors: Flavor[];
  UnknownFlavors: Flavor[];
  Merged: Flavor[][];
  ToMerge: Flavor[][];
  Merging: Flavor[][];
  Next: Flavor[];
  Done: boolean;
}

export class Compare extends React.Component<{}, CompareState> {
  constructor(props: {}) {
    super(props);
    this.state = this.advanceState({
      RankedFlavors: _.cloneDeep(flavors),
      ExcludedFlavors: [],
      UnknownFlavors: [],
      Merged: [],
      ToMerge: _.shuffle(flavors.map((flavor) => [flavor])),
      Merging: [],
      Next: [],
      Done: false,
    });
  }

  advanceState = (state: CompareState): CompareState => {
    while (!state.Done) {
      console.log(state);
      if (state.Merging.length === 0) {
        if (state.Next.length > 0) {
          state.Merged.push(state.Next);
          state.Next = [];
        }
        if (state.ToMerge.length > 0) {
          state.Merging.push(...state.ToMerge.slice(0, 2));
          state.ToMerge.shift();
          state.ToMerge.shift();
        } else if (state.Merged.length > 1) {
          state.ToMerge = state.Merged;
          state.Merged = [];
        } else {
          state.Done = true;
        }
      } else if (state.Merging.length === 1) {
        state.Next.push(...state.Merging[0]);
        state.Merging.pop();
      } else if (state.Merging.length === 2) {
        if (state.Merging[0].length === 0) {
          state.Merging.shift();
        } else if (state.Merging[1].length === 0) {
          state.Merging.pop();
        } else {
          break;
        }
      }
    }
    return state;
  };

  handleComparison = (comp: PickerResult) => {
    this.setState((state) => {
      let copy = _.cloneDeep<CompareState>(state);

      switch (comp.Result) {
        case "excluded":
          copy.ExcludedFlavors.push(comp.Flavor);
          break;
        case "unknown":
          copy.UnknownFlavors.push(comp.Flavor);
          break;
        case "preference":
          copy.Next.push(comp.Flavor);
          break;
      }

      if (copy.Merging[0][0].ID === comp.Flavor.ID) {
        copy.Merging[0].shift();
      } else if (copy.Merging[1][0].ID === comp.Flavor.ID) {
        copy.Merging[1].shift();
      }

      copy = this.advanceState(copy);

      return copy;
    });
  };

  render() {
    const flavorMapper = (flavor: Flavor) => <div
      className={"col-3 text-center"}
      key={flavor.ID}
    >
      <img
        className={"img-fluid"}
        src={flavor.ImgSrc}
        alt={flavor.Name}
      />
    </div>;
    const flavors = [];
    flavors.push(...this.state.Merged.flatMap((arr) => arr.map(flavorMapper)));
    flavors.push(...this.state.Next.map(flavorMapper));
    flavors.push(...this.state.Merging.flatMap((arr) => arr.map(flavorMapper)));
    flavors.push(...this.state.ToMerge.flatMap((arr) => arr.map(flavorMapper)));

    const flavorList = <Container className={"my-4"}>
      <h2 className={"text-center"}>Your ordered preferences:</h2>
      <Row>
        {flavors}
      </Row>
    </Container>;

    if (this.state.Done) {
      return flavorList;
    }

    return (
      <div>
        <Picker
          A={this.state.Merging[0][0]}
          B={this.state.Merging[1][0]}
          Callback={this.handleComparison}
        />
        {flavorList}
      </div>
    );
  }
}