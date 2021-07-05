import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  //DOM Properties are camel cased ; no hyphens
  @HostBinding('style.backgroundColor') private bgColor: string = 'transparent';

  ngOnInit() {}

  @HostListener('mouseenter') onMouseOver(eventData: Event) {
    this.bgColor = 'cyan';
  }
  @HostListener('mouseleave') onMouseExit(eventData: Event) {
    this.bgColor = 'transparent';
  }
}
