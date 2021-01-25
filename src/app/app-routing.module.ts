import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RulesComponent} from './rules/rules.component';
import {GameComponent} from './game/game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rules',
    pathMatch: 'full'
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
