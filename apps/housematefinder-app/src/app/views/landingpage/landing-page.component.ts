import { Component, OnInit } from '@angular/core';
import {faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'housematefinder-landingpage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  quote = faQuoteLeft;
  apple = faApple;
  googlePlay = faGooglePlay;
  envelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }
}
