import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {Scroll} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AuthenticationModalComponent} from "../authentication-modal/authentication-modal.component";

@Component({
  selector: 'housematefinder-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  open = false;
  bgColor = 'rgba(48,48,48,0)';
  @HostBinding() @Input('class') classList = '';
  loggedIn = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onWindowScroll($event: any) {
    let opacity = scrollY/200 < 1 ? scrollY/200 : 1;
    this.bgColor = 'rgba(48,48,48,' + opacity + ')';
  }

  openAuthModal() {
    const modal = this.dialog.open(AuthenticationModalComponent, {
      width: '400px',
      maxHeight: '95vh'
    }).afterOpened().subscribe(() => {
      this.open = false;
    })
  }
}
