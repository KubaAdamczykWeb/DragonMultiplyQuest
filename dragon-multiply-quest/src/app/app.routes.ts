import { Routes } from '@angular/router';
import { QuestPageComponent } from 'src/page/quest-page/quest-page.component';
import { MainPageComponent } from 'src/page/main-page/main-page.component';
import { QuestGamePageComponent } from 'src/page/quest-game-page/quest-game-page.component';

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'dragons', component: QuestPageComponent},
  {path: 'quest', component: QuestPageComponent},
  {path: 'quest-game', component: QuestGamePageComponent}
];
