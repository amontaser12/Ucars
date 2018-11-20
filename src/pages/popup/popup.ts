import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { NotesPage } from '../notes/notes';
import { ViewPage } from '../view/view';



@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html'
})
export class PopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    popView(){
      this.navCtrl.pop();
    }
    View(){
      this.navCtrl.push(NotesPage);
    }
    cart(){
      this.navCtrl.setRoot(ViewPage)
    }
    
  }
