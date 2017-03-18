import { Component } from '@angular/core';

import { HomePage } from "../home/home";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    /**
     * This tells the tabs component which Pages
     * should be each tabs root page
     * @type {*}
     * @memberOf TabsPage
     */
    homePage: any = HomePage;

}