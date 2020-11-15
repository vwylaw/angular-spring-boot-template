import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloComponent} from './components/hello/hello.component';
import {HelloComponentModule} from "./components/hello/hello.component.module";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
