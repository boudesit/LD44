import { Player } from '../objects/player';

export class EndGameService {
  getEnd(player: Player) {
    if(player.getCurrentHealth() <= 4) return 'fin1';
    if(player.getCurrentHealth() === 5) return 'fin2';
    return 'fin3';
  }
}
