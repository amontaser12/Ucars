import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController} from 'ionic-angular';
import { InsecPage } from '../insec/insec';
import { OutsecPage } from '../outsec/outsec';
import { ViewPage } from '../view/view';




@Component({
  selector: 'page-fix',
  templateUrl: 'fix.html'
})
export class FixPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    }
    open(){
      this.navCtrl.push(InsecPage);
    }
    popView(){
      this.navCtrl.pop()
    }
    openPage(){
      this.navCtrl.push(OutsecPage)
    }
    cart(){
      this.navCtrl.setRoot(ViewPage)
    }
    
      
  }
  
