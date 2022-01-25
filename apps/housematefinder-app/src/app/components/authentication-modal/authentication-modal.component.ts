import {Component, Inject, OnInit} from '@angular/core';
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faGooglePlusG} from "@fortawesome/free-brands-svg-icons";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'housematefinder-authentication-modal',
  templateUrl: './authentication-modal.component.html',
  styleUrls: ['./authentication-modal.component.scss']
})
export class AuthenticationModalComponent implements OnInit {

  see = faEye;
  hide = faEyeSlash;
  facebook = faFacebookF;
  google = faGooglePlusG;

  showPass = false;
  register = true;
  constructor(public dialogRef: MatDialogRef<AuthenticationModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
