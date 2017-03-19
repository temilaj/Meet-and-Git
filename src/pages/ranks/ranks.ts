import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  /**
   * Creates an instance of RanksPage
   * and injects the following depndencies
   * @param {NavController} navCtrl 
   * @param {Githubservice} githubService 
   * 
   * @memberOf RanksPage
   */
  constructor(public navCtrl: NavController, private githubService: Githubservice) { }

  /**
   * get github users best matching
   * the parameters cityname and language
   * 
   * @memberOf RanksPage
   */
  getRank(){
        this.githubService.rankUsers(this.cityname, this.language)
        .subscribe(res => {
            this.users = res.items;
        });
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
