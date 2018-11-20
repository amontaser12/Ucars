import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController,MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ViewPage } from '../view/view';

@Component({
    selector: 'page-contactus',
    templateUrl: 'contactus.html'
  })

  export class ContactusPage{
    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public menuCtrl: MenuController){
        
    }
  
    openPage(){
      this.navCtrl.setRoot(HomePage)
    }
    cart(){
      this.navCtrl.setRoot(ViewPage)
    }
   
  }