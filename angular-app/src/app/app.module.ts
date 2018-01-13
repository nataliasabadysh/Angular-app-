import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SandboxComponents} from "./components/sandbox/sandbox.components";


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
