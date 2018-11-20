import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { ServicesPage } from '../services/services';
import { FixPage } from '../fix/fix';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl : App) {
    }
    page(){
      this.navCtrl.push(FixPage)
    }
    openPage(){
      this.navCtrl.push(ServicesPage);
    }
    cart(){
      this.navCtrl.setRoot(ViewPage)
    }
    
  }
