import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconsModule} from "@housematefinder/ui";
import {MatDialogModule} from "@angular/material/dialog";
import {AuthenticationModalComponent} from "../components/authentication-modal/authentication-modal.component";

@NgModule({
  declarations: [AuthenticationModalComponent],
  imports: [
    CommonModule,
    IconsModule,
    MatDialogModule
  ],
  exports: [
    IconsModule,
    MatDialogModule,
    AuthenticationModalComponent
  ]
})
export class SharedModule { }
