import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PopPage } from '../pages/pop/pop';
import { ServicesPage } from '../pages/services/services';
import { BrightPage } from '../pages/bright/bright';
import { PopupPage } from '../pages/popup/popup';
import { NotesPage } from '../pages/notes/notes';
import { InsecPage } from '../pages/insec/insec';
import { OutsecPage } from '../pages/outsec/outsec';
import{ SalePage } from '../pages/sale/sale';
import { ViewPage} from '../pages/view/view';
import { NextPage } from '../pages/next/next';
import { ContactusPage } from '../pages/contactus/contactus';
import { DiscountPage } from '../pages/discount/discount';
import { FixPage } from '../pages/fix/fix';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ServicesPage,
    BrightPage,
    PopupPage,
    PopPage,
    NotesPage,
    DiscountPage,
    FixPage,
    SalePage,
    ViewPage,
    NextPage,
    InsecPage,
    OutsecPage,
    ContactusPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ServicesPage,
    BrightPage,
    PopupPage,
    PopPage,
    NotesPage,
    SalePage,
    ViewPage,
    DiscountPage,
    FixPage,
    NextPage,
    InsecPage,
    OutsecPage,
    ContactusPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
