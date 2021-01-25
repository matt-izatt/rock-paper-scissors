import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';
import { ScoreboardComponent } from './game/scoreboard/scoreboard.component';
import { ActionBarComponent } from './game/action-bar/action-bar.component';
import { PlayAreaComponent } from './game/play-area/play-area.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    RulesComponent,
    ScoreboardComponent,
    ActionBarComponent,
    PlayAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
