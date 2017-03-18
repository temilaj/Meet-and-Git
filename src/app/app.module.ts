import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserprofilePage } from "../pages/userprofile/userprofile";
import { RanksPage } from "../pages/ranks/ranks";
import { AboutPage } from "../pages/about/about";
import { RepoDetailPage } from "../pages/modals/repodetails";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserprofilePage,
    RanksPage,
    AboutPage,
    RepoDetailPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserprofilePage,
    RanksPage,
    AboutPage,
    RepoDetailPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
