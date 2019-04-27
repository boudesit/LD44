import { Effect } from './effect';

export class Card {

    id : number;
    title : string;
    description : string;
    cost : number;
    effects : Effect[];
    attack : number;
    armor : number;
    heal : number;
    score : number;
    merchantCost : number;
    spriteUrl : string;


    constructor(jsonObj : any) {

        this.id = jsonObj.id;
        this.title = jsonObj.title;
        this.description = jsonObj.description;
        this.cost = jsonObj.cost;
        this.effects = jsonObj.effects;
        this.attack = jsonObj.attack;
        this.armor = jsonObj.armor;
        this.heal = jsonObj.heal;
        this.score = jsonObj.score;
        this.merchantCost = jsonObj.merchantCost;
        this.spriteUrl = jsonObj.spriteUrl;
    }
}
