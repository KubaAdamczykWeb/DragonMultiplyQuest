import { Routes } from '@angular/router';
import { QuestPageComponent } from 'src/page/quest-page/quest-page.component';
import { MainPageComponent } from 'src/page/main-page/main-page.component';
import { QuestGamePageComponent } from 'src/page/quest-game-page/quest-game-page.component';
import { AddTutorialComponent } from 'src/app/test/components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from 'src/app/test/components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from 'src/app/test/components/tutorials-list/tutorials-list.component';

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'dragons', component: QuestPageComponent},
  {path: 'quest', component: QuestPageComponent},
  {path: 'quest-game', component: QuestGamePageComponent},
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
];
