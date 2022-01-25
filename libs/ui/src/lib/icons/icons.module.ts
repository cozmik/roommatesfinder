import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import {Facebook, Instagram, MapPin, Menu, Twitter, X} from 'angular-feather/icons';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

// Select some icons (use an object, not an array)
const icons = {
  Instagram,
  Facebook,
  Twitter,
  Menu,
  MapPin,
  X
};


@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons),
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    FeatherModule,
    FontAwesomeModule
  ]
})
export class IconsModule { }
