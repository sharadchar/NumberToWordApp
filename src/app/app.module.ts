import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NumberToWordService } from './numberToWord.service'
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NumberToWordService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
