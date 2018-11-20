import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ViewPage } from '../view/view';


@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
  select: Array<{ title:string , selection: string, price:string }>;
  selected: Array<{title: string , val: string }>;
  public tap: number = 0;
  // elseTemplateClick: boolean;
  // TemplateClick:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
      this.select = [
        { title:"سيدان" , selection: 'سيدان', price: '15000' },
        { title:"كوبيه", selection: 'كوبيه', price: '12000' },
        { title:"بيك اب", selection: 'بيك اب', price: '17000' },
        { title:"جيب", selection: 'جيب', price: '20000' },
      ];
      this.selected =[
        {title: 'بلاك اوت كامل' , val: 'بلاك اوت '},
        {title: 'تلميع داخلي' , val: 'بلاك  '},
      ];
    }
    tapEvent(e) {
      this.tap++
    }
    
    popView(){
      this.navCtrl.pop()
    }
    open(){
      this.navCtrl.setRoot(ViewPage)
    }
    cart(){
      this.navCtrl.setRoot(ViewPage)
    }
    
  }
