import { Component } from '@angular/core';
import { BackButtonsComponent } from 'src/component/back-buttons/back-buttons.component';
import { GameComponent } from 'src/component/game/game.component';
import { PageComponent } from 'src/component/page/page.component';

@Component({
  selector: 'dramul-quest-game-page',
  standalone: true,
  imports: [PageComponent, GameComponent, BackButtonsComponent],
  templateUrl: './quest-game-page.component.html',
  styleUrls: ['./quest-game-page.component.scss']
})
export class QuestGamePageComponent {

}
