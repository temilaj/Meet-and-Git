import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'repodetails.html'
})
export class RepoDetailPage {
  repo: any;

  /**
   * Creates an instance of RepoDetailPage.
   * and injects the following depndencies
   * @param {NavParams} navParams 
   * @param {ViewController} viewCtrl 
   * 
   * @memberOf RepoDetailPage
   */
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.repo = this.navParams.get('repo');
  }
  
   /**
    * dismiss modal
    * 
    * @memberOf RepoDetailPage
    */
   dismiss() {
    this.viewCtrl.dismiss();
  }
}