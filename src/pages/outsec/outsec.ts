import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
// import { PopOverPage } from '../popover/popover';
import { ViewPage } from '../view/view';


@Component({
  selector: 'page-outsec',
  templateUrl: 'outsec.html'
})
export class OutsecPage {
  select: Array<{ title:string , selection: string }>;
  selected: Array<{title: string , val: string }>;
  public tap: number = 0;
  // elseTemplateClick: boolean;
  // TemplateClick:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
      this.select = [
        { title:"سيدان" , selection: 'سيدان' },
        { title:"كوبيه", selection: 'كوبيه' },
        { title:"بيك اب", selection: 'بيك اب' },
        { title:"جيب", selection: 'جيب' },
      ];
      this.selected =[
        {title: 'بلاك اوت كامل' , val: 'بلاك اوت '},
        {title: 'تلميع داخلي' , val: 'بلاك  '},
        {title: 'بلاك اوت كامل' , val: 'بلو اوت'},
        {title: 'بلاك اوت كامل' , val: 'بلو'},
        {title: 'بلاك اوت كامل' , val: 'يي'},
      ];
    }
    tapEvent(e) {
      this.tap++
    }
    
    popView(){
      this.navCtrl.pop()
    }
    cart(){
      this.navCtrl.setRoot(ViewPage)
    }
    open(){
      this.navCtrl.setRoot(ViewPage)
    }
    
  }
