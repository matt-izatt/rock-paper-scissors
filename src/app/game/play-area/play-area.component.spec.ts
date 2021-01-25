import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayAreaComponent} from './play-area.component';

describe('PlayAreaComponent', () => {
  let component: PlayAreaComponent;
  let fixture: ComponentFixture<PlayAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayAreaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAreaComponent);
    component = fixture.componentInstance;
    component.playerAction = 'Rock';
    component.computerAction = 'Scissors';
    component.result = 'Win';
    fixture.detectChanges();
  });

  beforeAll(() => {
    jasmine.clock().install();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('animate', () => {
    it('should set the display actions to rock', () => {
      component.ngOnChanges();
      jasmine.clock().tick(10);
      expect(component.title).toBe('Rock');
      expect(component.playerDisplayAction).toBe('Rock');
      expect(component.computerDisplayAction).toBe('Rock');
    });

    it('should set the display actions to paper', () => {
      component.ngOnChanges();
      jasmine.clock().tick(750);
      expect(component.title).toBe('Paper');
      expect(component.playerDisplayAction).toBe('Paper');
      expect(component.computerDisplayAction).toBe('Paper');
    });

    it('should set the display actions to scissors', () => {
      component.ngOnChanges();
      jasmine.clock().tick(1500);
      expect(component.title).toBe('Scissors');
      expect(component.playerDisplayAction).toBe('Scissors');
      expect(component.computerDisplayAction).toBe('Scissors');
    });

    it('should set the display actions to the component inputs', () => {
      component.ngOnChanges();
      jasmine.clock().tick(2250);
      expect(component.title).toBe('Win');
      expect(component.playerDisplayAction).toBe('Rock');
      expect(component.computerDisplayAction).toBe('Scissors');
    });

    it('should emit an event when the animation finishes', () => {
      const animationFinishEvent = spyOn(component.animationFinished, 'emit').and.callThrough();
      component.ngOnChanges();
      jasmine.clock().tick(3500);
      expect(animationFinishEvent).toHaveBeenCalled();
    });
  });

  afterAll(() => {
    jasmine.clock().uninstall();
  });
});
