import { Component } from '@angular/core';
import { NavController, NavParams,ViewController} from 'ionic-angular';

// import { ListPage } from '../list/list';
// import { ListPage} from '../list/list';
// import { HomePage} from '../home/home';


@Component({
  selector: 'page-pop',
  templateUrl: 'pop.html'
})
export class PopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

    }
    dismiss(){
      this.viewCtrl.dismiss();
    }
  }
