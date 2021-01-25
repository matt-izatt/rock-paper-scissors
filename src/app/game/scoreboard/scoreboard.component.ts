import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {

  @Input() playerScore = 0;
  @Input() computerScore = 0;
}
