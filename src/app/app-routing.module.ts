import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from "./modules/welcome/welcome.component";
import {HomeComponent} from "./modules/home/home.component";
import {ExploreComponent} from "./modules/explore/explore.component";
import {BlogComponent} from "./modules/blog/blog.component";
import {AboutComponent} from "./modules/about/about.component";
import {TermsAndConditionsComponent} from "./modules/terms-and-conditions/terms-and-conditions.component";
import {PrivacyPolicyComponent} from "./modules/privacy-policy/privacy-policy.component";
import {HelpAndFAQComponent} from "./modules/help-and-FAQ/help-and-FAQ.component";
import {ContactUsComponent} from "./modules/contact-us/contact-us.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'help', component: HelpAndFAQComponent},
  {path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
