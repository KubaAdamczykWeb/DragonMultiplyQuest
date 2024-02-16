import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from 'src/component/layout/layout.component';
import { MainPageComponent } from 'src/page/main-page/main-page.component';

@Component({
  selector: 'dramul-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent ,MainPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dragon Multiple Quest';
}
