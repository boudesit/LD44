import {EffectCondition} from './effectCondition';

export class Effect {

  type: String;
  target: String;

  probability: number;

  conditions: EffectCondition[];

  duration: number;
  delay: number;

  attack: number;
  armor: number;
  health: number;

  constructor() {

  }
}
