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

  ionViewDidLoad() {
    this.user = this.navParams.get('user');
    this.githubService.getRepos(this.user.login).subscribe(repos => this.repos = repos)
  }

  repoSelected($event, repo){
    // console.log($event);
    // console.log(repo);
    let modal = this.modalCtrl.create(RepoDetailPage, 
    {repo:repo});
    modal.present();
    // this.navCtrl.push(RepoDetailPage,{
    //   repo : repo
    // })
  }

}
