import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { TabsPage } from "../pages/tabs/tabs";
import { Githubservice } from "../providers/githubservice";


@Component({
  templateUrl: 'app.html',
  providers: [Githubservice]
})
export class MyApp {

  /**
   * This tells the app Component that the 
   * rooPage of the app is the tabs at the bottom 
   * of the app(TabsPage)
   */
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
