import { PageComponent } from './../../component/page/page.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dramul-main-page',
  standalone: true,
  imports: [CommonModule, PageComponent, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent { 
}
