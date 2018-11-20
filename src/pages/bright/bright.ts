import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { PopupPage } from '../popup/popup';
import { ViewPage } from '../view/view';



@Component({
  selector: 'page-bright',
  templateUrl: 'bright.html'
})
export class BrightPage {
  pop: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pop = PopupPage;
    }
    
    
    popView(){
      this.navCtrl.pop()
    }
    cart(){
      this.navCtrl.setRoot(ViewPage)
    }
      
  }
  
