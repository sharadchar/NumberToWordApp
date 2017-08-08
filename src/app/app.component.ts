import { Component } from '@angular/core';
import { NumberToWordService } from './numberToWord.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NumberToWordService]
})
export class AppComponent {
  title = 'Number To Word App';
  name:string = "abc";
  amount:number = 0;
  amountInWords:string="";

  constructor(numberToWordService : NumberToWordService){
    this.amountInWords = numberToWordService.getWordsRepresentationofNumber(this.amount);

  }

}
