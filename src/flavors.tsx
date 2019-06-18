export interface Flavor {
  ID: number;
  Name: string;
  ImgSrc: string;
}

export const flavors: Flavor[] = [
  {ID: 0, Name: "Apricot", ImgSrc: require("./assets/flavors/APRICOT-3.png")},
  {ID: 1, Name: "Berry", ImgSrc: require("./assets/flavors/BERRY-1.png")},
  {ID: 2, Name: "Coconut", ImgSrc: require("./assets/flavors/COCONUT.png")},
  {ID: 3, Name: "Cran-Raspberry", ImgSrc: require("./assets/flavors/CRAN-RASPBERRY.png")},
  {ID: 4, Name: "Key Lime", ImgSrc: require("./assets/flavors/KEYLIME-1.png")},
  {ID: 5, Name: "Lemon", ImgSrc: require("./assets/flavors/LEMON-2.png")},
  {ID: 6, Name: "Lime", ImgSrc: require("./assets/flavors/LIME-1.png")},
  {ID: 7, Name: "Mango", ImgSrc: require("./assets/flavors/MANGO.png")},
  {ID: 8, Name: "Orange", ImgSrc: require("./assets/flavors/ORANGE.png")},
  {ID: 9, Name: "Pamplemousse", ImgSrc: require("./assets/flavors/PAMPLEMOUSSE-1.png")},
  {ID: 10, Name: "Passionfruit", ImgSrc: require("./assets/flavors/PASSIONFRUIT.png")},
  {ID: 11, Name: "Peach-Pear", ImgSrc: require("./assets/flavors/PEACH-PEAR.png")},
  {ID: 12, Name: "Pure", ImgSrc: require("./assets/flavors/PURE-2.png")},
  {ID: 13, Name: "Tangerine", ImgSrc: require("./assets/flavors/TANGERINE-1.png")},
  {ID: 14, Name: "Cerise Limón", ImgSrc: require("./assets/flavors/CERISE-LIMON-1.png")},
  {ID: 15, Name: "Kiwi Sandía", ImgSrc: require("./assets/flavors/KIWI-SANDIA.png")},
  {ID: 16, Name: "Melón Pomelo", ImgSrc: require("./assets/flavors/MELON-POMELO-1.png")},
  {ID: 17, Name: "Múre Pepino", ImgSrc: require("./assets/flavors/MURE-PEPINO.png")},
  {ID: 18, Name: "Piña Fraise", ImgSrc: require("./assets/flavors/PINA-FRAISE.png")},
  {ID: 19, Name: "Pomme Bayá", ImgSrc: require("./assets/flavors/POMME-BAYA.png")},
  {ID: 20, Name: "Coconut Cola", ImgSrc: require("./assets/flavors/COCONUT-COLA.png")},
  {ID: 21, Name: "Coffea Exotica", ImgSrc: require("./assets/flavors/EXOTICA.png")},
  {ID: 22, Name: "Cubana", ImgSrc: require("./assets/flavors/CUBANA.png")},
  {ID: 23, Name: "LaCola", ImgSrc: require("./assets/flavors/LaCOLA-1.png")},
];