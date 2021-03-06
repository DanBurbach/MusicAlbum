import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
