import {Component} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  playerScore = 0;
  computerScore = 0;

  playerAction = '';
  computerAction = '';

  result = '';

  private possibleActions = ['Rock', 'Paper', 'Scissors'];

  startRound(action: string): void {
    this.playerAction = action;
    this.computerAction = this.chooseComputerAction();
    this.result = this.checkResult();
  }

  nextRound(): void {
    this.updateScore();
    this.result = '';
    this.playerAction = '';
    this.computerAction = '';
  }

  private updateScore(): void {
    if (this.result === 'Lose') {
      this.computerScore++;
    }

    if (this.result === 'Win') {
      this.playerScore++;
    }
  }

  private chooseComputerAction(): string {
    const randomChoice = Math.floor(Math.random() * 3);
    return this.possibleActions[randomChoice];
  }

  private checkResult(): string {
    if (this.computerAction === this.playerAction) {
      return 'Draw';
    }

    if (this.computerAction === 'Rock' && this.playerAction !== 'Paper') {
      return 'Lose';
    }

    if (this.computerAction === 'Paper' && this.playerAction !== 'Scissors') {
      return 'Lose';
    }

    if (this.computerAction === 'Scissors' && this.playerAction !== 'Rock') {
      return 'Lose';
    }

    return 'Win';
  }
}
