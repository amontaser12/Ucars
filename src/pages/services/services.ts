import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { BrightPage } from '../bright/bright';
import { ViewPage } from '../view/view';


@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {
  bright:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.bright = BrightPage;
    }
    popView(){
      this.navCtrl.pop()
    }
    cart(){
      this.navCtrl.setRoot(ViewPage)
    }
  }
