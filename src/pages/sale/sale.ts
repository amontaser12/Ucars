import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController,MenuController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { DiscountPage } from '../discount/discount'
import { ViewPage } from '../view/view';

@Component({
    selector: 'page-sale',
    templateUrl: 'sale.html'
  })

  export class SalePage{
    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public menuCtrl: MenuController){
        
    }
    // enableSideMenu(){
    //   this.menuCtrl.get('navRight')
    //   this.menuCtrl.enable(true, 'navRight')
    //   this.navCtrl.setRoot(ListPage)
    // }
    popView(){
      this.navCtrl.pop()
    }
    openPage(){
      this.navCtrl.setRoot(ListPage)
    }
    presentPopover(){
      let popover = this.popoverCtrl.create(DiscountPage,{} ,{cssClass:'customePopover'});
      popover.present();
    }
    cart(){
      this.navCtrl.setRoot(ViewPage)
    }
  }