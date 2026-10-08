import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CardsComponent } from './navigatingcomponent/cards/cards.component';
import { AhaOriginalsComponent } from './navigatingcomponent/aha-originals/aha-originals.component';
import { WatchForFreeComponent } from './navigatingcomponent/watch-for-free/watch-for-free.component';
import { NavBarComponent } from './commoncomponents/nav-bar/nav-bar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { WatchInTeluguAndTamilComponent } from './navigatingcomponent/watch-in-telugu-and-tamil/watch-in-telugu-and-tamil.component';
import { TrendingNowComponent } from './navigatingcomponent/trending-now/trending-now.component';
import { ActionComponent } from './navigatingcomponent/action/action.component';
import { ThrillerComponent } from './navigatingcomponent/thriller/thriller.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
     AhaOriginalsComponent,
     WatchForFreeComponent,
     NavBarComponent,
     FooterComponent,
     WatchInTeluguAndTamilComponent,
     TrendingNowComponent,
     ActionComponent,
     ThrillerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
