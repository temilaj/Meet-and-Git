import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Githubservice } from "../../providers/githubservice";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  user:any;
  repos:any[];
  users: any;

  constructor(public navCtrl: NavController, private githubService: Githubservice) {
    
  }
  
  searchUser(){
    this.githubService.getUser(this.username).subscribe(user => 
    {
      this.user = user;
    });
  }
}
