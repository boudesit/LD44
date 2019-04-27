import { Character } from "./character";
import { Card } from "./card";

export class Player extends Character {

  deck: Card[];

  constructor() {
    super();
  }
}
