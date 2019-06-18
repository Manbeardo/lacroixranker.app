import * as React from "react";
import {Flavor} from "./flavors";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export interface PickerResult {
  Flavor: Flavor;
  Result: "preference" | "excluded" | "unknown";
}

export interface PickerProps {
  A: Flavor;
  B: Flavor;
  Callback: (result: PickerResult) => void;
}

export class Picker extends React.Component<PickerProps, {}> {
  BigFlavor: React.FC<{ Flavor: Flavor }> = (props: { Flavor: Flavor }) => {
    return (
      <div className={"d-flex flex-column justify-content-start px-5"}>
        <Button
          className={"py-1"}
          variant={"light"}
          onClick={() => {
            this.props.Callback({Flavor: props.Flavor, Result: "preference"});
          }}
        >
          <Image
            className={"w-100"}
            src={props.Flavor.ImgSrc}
            alt={props.Flavor.Name}
          />
        </Button>
        <h4 className={"text-center"}>{props.Flavor.Name}</h4>
        <ButtonToolbar className={"d-flex flex-row justify-content-center"}>
          <Button
            className={"mx-1 my-1"}
            variant={"secondary"}
            title={"I've never tried it"}
            onClick={() => {
              this.props.Callback({Flavor: props.Flavor, Result: "unknown"});
            }}
          >
            <span role={"img"} aria-label={"I've never tried it"}>🤷</span>
          </Button>
          <Button
            className={"mx-1 my-1"}
            variant={"danger"}
            title={"I hate it!"}
            onClick={() => {
              this.props.Callback({Flavor: props.Flavor, Result: "excluded"});
            }}
          >
            <span role={"img"} aria-label={"I hate it!"}>🤮</span>
          </Button>
        </ButtonToolbar>
      </div>
    );
  };

  render() {
    return (
      <Container>
        <h1 className={"text-center"}>Which do you prefer?</h1>
        <div className={"d-flex flex-row justify-content-center"}>
          <this.BigFlavor Flavor={this.props.A}/>
          <div className={"d-flex flex-column justify-content-center"}>
            <h2 className={"text-center h-1"}>or</h2>
          </div>
          <this.BigFlavor Flavor={this.props.B}/>
        </div>
      </Container>
    );
  }
}