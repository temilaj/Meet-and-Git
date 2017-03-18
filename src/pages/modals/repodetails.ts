import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'repodetails.html'
})
export class RepoDetailPage {
  repo: any;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.repo = this.navParams.get('repo');
    console.log(this.repo);

  }
  
   dismiss() {
    this.viewCtrl.dismiss();
  }
}