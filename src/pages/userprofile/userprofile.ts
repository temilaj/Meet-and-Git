import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Githubservice } from "../../providers/githubservice";

@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html'
})
export class UserprofilePage {
  user: any;
  repos:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubService: Githubservice) {

  }

  ionViewDidLoad() {
    this.user = this.navParams.get('user');
    this.githubService.getRepos(this.user.login).subscribe(repos => this.repos = repos)
  }

}
