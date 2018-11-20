import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController,MenuController  } from 'ionic-angular';
import { NextPage } from '../next/next';


@Component({
    selector: 'page-view',
    templateUrl: 'view.html'
  })

  export class ViewPage{
    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController
        , public menuCtrl: MenuController){

    }
    presentPopover(ev){
        let popover = this.popoverCtrl.create(NextPage,{}, {cssClass: 'popover-side'});
        popover.present();
    }

  }