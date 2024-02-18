import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageComponent } from 'src/component/page/page.component';
import { MapComponent } from 'src/component/map/map.component';
import { BackButtonsComponent } from 'src/component/back-buttons/back-buttons.component';

@Component({
  selector: 'dramul-dragons-quest-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageComponent, MapComponent, BackButtonsComponent],
  templateUrl: './dragons-quest-page.component.html',
  styleUrls: ['./dragons-quest-page.component.scss']
})
export class DragonsQuestPageComponent { 
}
