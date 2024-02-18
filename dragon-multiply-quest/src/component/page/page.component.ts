import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaysService } from 'src/service/replays/replays.service';

@Component({
  selector: 'dramul-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  public loading: boolean = true;
  
  private _replays = inject(ReplaysService);

  public replay = this._replays.getRandomOperationAsString();  

  constructor(){
    setTimeout(()=>{
      this.loading = false;
    },500)
  }
}
