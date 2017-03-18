import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Githubservice } from "../../providers/githubservice";
import { UserprofilePage } from "../userprofile/userprofile";

@Component({
  selector: 'page-ranks',
  templateUrl: 'ranks.html'
})
export class RanksPage {
  cityname: string;
  language: string;
  user: any;
  users: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubService: Githubservice) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RanksPage');
  }

  getRank(){
        this.githubService.rankUsers(this.cityname, this.language).subscribe(res => 
        {
            this.users = res.items;
        })
    }

    /**
     * pass the selected user to the UserprofilePage
     * and navigate to the page
     * @param {any} event 
     * @param {any} user 
     * 
     * @memberOf RanksPage
     */
    userSelected(event, user){
      this.navCtrl.push(UserprofilePage,{
        user: user
      });
    }
}
