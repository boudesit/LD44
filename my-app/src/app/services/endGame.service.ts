import { Player } from '../objects/player';

export class EndGameService {
  getEnd(player: Player) {
    if(player.getCurrentHealth() <= 0) return 'Game Over';
    if(player.getCurrentHealth() <= 4) return 'Bad End';
    if(player.getCurrentHealth() === 5) return 'Mitigated End';
    return 'Good End';
  }
}
