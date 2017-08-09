
import { Component } from '@angular/core';
import { NumberToWordService } from './numberToWord.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Number To Word App';
  name:string = "abc";
  amount:number = 0;
  amountInWords:string="";

  constructor(private _numberToWordService : NumberToWordService){
    this._numberToWordService.getWordsRepresentationofNumber(this.amount)
    .subscribe(res=>console.log(res));

  }

}
