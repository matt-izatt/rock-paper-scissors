import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {PlayAreaComponent} from './play-area/play-area.component';
import {ActionBarComponent} from './action-bar/action-bar.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameComponent,
        ScoreboardComponent,
        PlayAreaComponent,
        ActionBarComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('startRound', () => {
    beforeEach(() => {
      component.startRound('Rock');
    });

    it('should set the playerAction', () => {
      expect(component.playerAction).toBe('Rock');
    });

    it('should set the computerAction', () => {
      expect(component.computerAction).toBeTruthy();
    });

    it('should check the result', () => {
      expect(component.result).toBeTruthy();
    });
  });

  describe('checkResult', () => {

    describe('win', () => {
      it('should set the result to win when the computer picks rock and the player picks paper', () => {
        spyOn(Math, 'random').and.returnValue(0.1);
        component.startRound('Paper');
        expect(component.result).toBe('Win');
      });

      it('should set the result to win when the computer picks paper and the player picks scissors', () => {
        spyOn(Math, 'random').and.returnValue(0.4);
        component.startRound('Scissors');
        expect(component.result).toBe('Win');
      });

      it('should set the result to win when the computer picks scissors and the player picks rock', () => {
        spyOn(Math, 'random').and.returnValue(0.8);
        component.startRound('Rock');
        expect(component.result).toBe('Win');
      });
    });

    describe('lose', () => {
      it('should set the result to lose when the computer picks rock and the player picks scissors', () => {
        spyOn(Math, 'random').and.returnValue(0.1);
        component.startRound('Scissors');
        expect(component.result).toBe('Lose');
      });

      it('should set the result to lose when the computer picks paper and the player picks rock', () => {
        spyOn(Math, 'random').and.returnValue(0.4);
        component.startRound('Rock');
        expect(component.result).toBe('Lose');
      });

      it('should set the result to lose when the computer picks scissors and the player picks paper', () => {
        spyOn(Math, 'random').and.returnValue(0.8);
        component.startRound('Paper');
        expect(component.result).toBe('Lose');
      });
    });

    describe('draw', () => {
      it('should set the result to draw when the computer picks rock and the player picks rock', () => {
        spyOn(Math, 'random').and.returnValue(0.1);
        component.startRound('Rock');
        expect(component.result).toBe('Draw');
      });

      it('should set the result to draw when the computer picks paper and the player picks paper', () => {
        spyOn(Math, 'random').and.returnValue(0.4);
        component.startRound('Paper');
        expect(component.result).toBe('Draw');
      });

      it('should set the result to draw when the computer picks scissors and the player picks scissors', () => {
        spyOn(Math, 'random').and.returnValue(0.8);
        component.startRound('Scissors');
        expect(component.result).toBe('Draw');
      });
    });
  });

  describe('nextRound', () => {
    it('should increase the player score when the player wins', () => {
      component.result = 'Win';
      component.nextRound();
      expect(component.playerScore).toBe(1);
    });

    it('should increase the computer score when the computer wins', () => {
      component.result = 'Lose';
      component.nextRound();
      expect(component.computerScore).toBe(1);
    });

    it('should not increase the player score when the player draws', () => {
      component.result = 'Draw';
      component.nextRound();
      expect(component.playerScore).toBe(0);
    });

    it('should not increase the computer score when the player draws', () => {
      component.result = 'Draw';
      component.nextRound();
      expect(component.playerScore).toBe(0);
    });

    it('should clear the player action', () => {
      component.result = 'Win';
      component.nextRound();
      expect(component.playerAction).toBe('');
    });

    it('should clear the computer action', () => {
      component.result = 'Win';
      component.nextRound();
      expect(component.computerAction).toBe('');
    });

    it('should clear the result', () => {
      component.result = 'Win';
      component.nextRound();
      expect(component.result).toBe('');
    });
  });
});
