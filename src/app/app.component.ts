import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactusPage } from '../pages/contactus/contactus';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ViewPage } from '../pages/view/view';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;


  pages: Array<{title: string, component: any, img: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'خدماتنا', component: ListPage , img : "../assets/imgs/spray-gun (1).png"},
      { title: 'سلة الخدمات', component: ViewPage, img: '../assets/imgs/shopping-cart.png'},
      { title: "تواصل معنا" , component: ContactusPage , img: '../assets/imgs/browser.png'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    // this.nav.push(page.component);
  }
  
}
