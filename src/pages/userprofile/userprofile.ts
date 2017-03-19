import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { Githubservice } from "../../providers/githubservice";
import { RepoDetailPage } from "../modals/repodetails";

@Component({
  templateUrl: 'userprofile.html'
})
export class UserprofilePage {
  user: any;
  repo:any;
  repos:any[];

  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
   private githubService: Githubservice, 
   public modalCtrl: ModalController) {

  }

  /**
   * load initialize user property
   * from the navigation data
   * and get the users github repos 
   * 
   * @memberOf UserprofilePage
   */
  ionViewDidLoad() {
    this.user = this.navParams.get('user');
    this.githubService
        .getRepos(this.user.login)
        .subscribe(repos => this.repos = repos)
  }

  /**
   * create modal and pass
   * data (repo) into the modal
   * 
   * @param {any} $event 
   * @param {any} repo 
   * 
   * @memberOf UserprofilePage
   */
  repoSelected($event, repo){
    let modal = this.modalCtrl.create
    (RepoDetailPage,{
      repo:repo
    });
    modal.present();
  }

}
