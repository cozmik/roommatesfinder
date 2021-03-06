import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {LandingPageComponent} from "../../views/landingpage/landing-page.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
