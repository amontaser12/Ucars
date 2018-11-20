import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ContactusPage } from '../contactus/contactus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  open(){
    this.navCtrl.setRoot(ListPage);
  }
  openPage(){
    this.navCtrl.setRoot(ContactusPage)
  }
}
