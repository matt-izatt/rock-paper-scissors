import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {

  @Input()
  chosenAction = '';

  @Output()
  actionChosen: EventEmitter<string> = new EventEmitter<string>();

  setActionChoice(action: string): void {
    this.actionChosen.emit(action);
  }
}
