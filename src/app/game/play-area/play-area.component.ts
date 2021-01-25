import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss']
})
export class PlayAreaComponent implements OnChanges {

  title = '';
  playerDisplayAction = '';
  computerDisplayAction = '';

  @Input() result = '';
  @Input() playerAction = '';
  @Input() computerAction = '';

  @Output() animationFinished: EventEmitter<null> = new EventEmitter();

  ngOnChanges(): void {
    if (this.result !== '') {
      this.animate();
    }
  }

  private animate(): void {
    setTimeout(() => this.title = this.playerDisplayAction = this.computerDisplayAction = 'Rock', 0);
    setTimeout(() => this.title = this.playerDisplayAction = this.computerDisplayAction = 'Paper', 750);
    setTimeout(() => this.title = this.playerDisplayAction = this.computerDisplayAction = 'Scissors', 1500);
    setTimeout(() => {
      this.title = this.result;
      this.playerDisplayAction = this.playerAction;
      this.computerDisplayAction = this.computerAction;
    }, 2250);
    setTimeout(() => this.animationFinished.emit(), 3500);
  }
}
