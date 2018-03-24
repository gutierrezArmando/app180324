import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';
import { HeaderComponent } from './header/header.component';
import { MydataComponent } from './mydata/mydata.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    HeaderComponent,
    MydataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
