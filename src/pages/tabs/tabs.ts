import { Component } from '@angular/core';

import { HomePage } from "../home/home";
import { RanksPage } from "../ranks/ranks";
import { AboutPage } from "../about/about";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    /**
     * This tells the tabs component which Pages
     * should be each tabs root page
     * @memberOf TabsPage
     */
    homePage: any = HomePage;
    ranksPage: any = RanksPage;
    aboutPage: any = AboutPage;

}