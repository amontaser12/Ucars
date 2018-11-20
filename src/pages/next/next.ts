import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController,MenuController,ViewController, App  } from 'ionic-angular';
import { SalePage } from '../sale/sale';

@Component({
    selector: 'page-next',
    templateUrl: 'next.html'
  })

  export class NextPage{
    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,public menuCtrl: MenuController,
      public viewCtrl: ViewController , public appCtrl : App){
        
    }
    openPage(){
      this.viewCtrl.dismiss()
      this.appCtrl.getRootNav().push(SalePage)
    }
    //  enableSideMenu(){
    //   // this.menuCtrl.get('navRight')
    //   // this.menuCtrl.enable(true, 'navRight')
    //   this.navCtrl.push(SalePage);
    // }
  }