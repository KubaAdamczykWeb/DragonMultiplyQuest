import { Routes } from '@angular/router';
import { DragonsQuestPageComponent } from 'src/page/dragons-quest-page/dragons-quest-page.component';
import { MainPageComponent } from 'src/page/main-page/main-page.component';

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'training', component: DragonsQuestPageComponent},
  {path: 'dragons', component: DragonsQuestPageComponent},
  {path: 'quest', component: DragonsQuestPageComponent}
];
