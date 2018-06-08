
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LunchPage } from '../pages/lunch/lunch';
import { DetailsPage } from '../pages/details/details';
import { RestProvider } from '../providers/rest/rest';
import {HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { RestaurantlistProvider } from '../providers/restaurantlist/restaurantlist';
@NgModule({
  declarations: [
    MyApp,
    LunchPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAqdtgGsdI3oU_00wVRnhVd5NuTcSoFW64'}),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LunchPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    RestaurantlistProvider
  ]
})
export class AppModule {}
