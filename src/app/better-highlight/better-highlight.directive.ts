import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  @Input()
  highlightColor : string = 'cyan';

  //DOM Properties are camel cased ; no hyphens
  @HostBinding('style.backgroundColor') private bgColor: string = 'transparent';

  ngOnInit() {}

  @HostListener('mouseenter') onMouseOver(eventData: Event) {
    this.bgColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseExit(eventData: Event) {
    this.bgColor = 'transparent';
  }
}
