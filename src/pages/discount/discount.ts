import { Component } from '@angular/core';
import { NavController, NavParams, ViewController,PopoverController } from 'ionic-angular';
import { PopPage } from '../pop/pop';


@Component({
  selector: 'page-discount',
  templateUrl: 'discount.html'
})
export class DiscountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public popoverCtrl: PopoverController) {

    }

    // open(){
    //   this.navCtrl.push(SalePage);
    // }
    
    close() {
      this.viewCtrl.dismiss();
    }   
    // presentToast(position: string, cssClass: string ,closeButtonText:	string,showCloseButton: boolean) {
    //   const toast = this.toastCtrl.create({
    //     message: '',
    //     duration: 3000,
    //     position: 'middle',
    //     cssClass: "toast-block",
       
        
    //   });
    //   toast.present();
    // }
    presentPopover(){
        let popover = this.popoverCtrl.create(
          PopPage,
           {},
            {cssClass: 'custome-popover'});
        popover.present();
      } 
  }
