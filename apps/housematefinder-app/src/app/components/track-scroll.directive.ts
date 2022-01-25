import {Directive, Output, EventEmitter, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[track-scroll]',
})
export class TrackScrollDirective {
  @Output() setScroll = new EventEmitter();
  private scroll = 0;

  constructor(private el: ElementRef) { }

  @HostListener('scroll', ['$event'])

  reset() {  this.el.nativeElement.scrollTop = this.scroll }

}
