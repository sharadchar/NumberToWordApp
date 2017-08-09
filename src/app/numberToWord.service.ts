import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core'

@Injectable()
export class NumberToWordService
{
    constructor(private _http:Http){

    }


    getWordsRepresentationofNumber(amount:number) 
    {
        //let _baseUrl:string = "http://localhost:50059/api/NumberToWord/GetNumberToWord?number=" + amount.toString();
        return this._http.get("http://localhost:50059/api/NumberToWord/GetNumberToWord?number=5646.654")
        .map(res => res.json());
        //return "abc";
    }
}