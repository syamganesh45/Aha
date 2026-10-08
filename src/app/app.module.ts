import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestReleasesComponent } from './navigatingcomponent/aha-originals/latest-releases/latest-releases.component';

import { CardsComponent } from './navigatingcomponent/cards/cards.component';
import { AhaOriginalsComponent } from './navigatingcomponent/aha-originals/aha-originals.component';
import { WatchForFreeComponent } from './navigatingcomponent/watch-for-free/watch-for-free.component';
import { WatchByLanguageComponent } from './navigatingcomponent/watch-by-language/watch-by-language.component';
import { NavBarComponent } from './commoncomponents/nav-bar/nav-bar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { WatchInTeluguAndTamilComponent } from './navigatingcomponent/watch-in-telugu-and-tamil/watch-in-telugu-and-tamil.component';
import { TrendingNowComponent } from './navigatingcomponent/trending-now/trending-now.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestReleasesComponent,

    CardsComponent,
     AhaOriginalsComponent,
     WatchForFreeComponent,
     WatchByLanguageComponent,
     NavBarComponent,
     FooterComponent,
     WatchInTeluguAndTamilComponent,
     TrendingNowComponent
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
