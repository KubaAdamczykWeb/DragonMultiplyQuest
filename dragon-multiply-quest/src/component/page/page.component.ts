import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dramul-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  public loading: boolean = true;

  constructor(){
    setTimeout(()=>{
      this.loading = false;
    },5*1000)
  }
}
