import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageComponent } from 'src/component/page/page.component';

@Component({
  selector: 'dramul-dragons-quest-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageComponent],
  templateUrl: './dragons-quest-page.component.html',
  styleUrls: ['./dragons-quest-page.component.scss']
})
export class DragonsQuestPageComponent {
  public exit():void {
    console.log('exit')
  }
}
