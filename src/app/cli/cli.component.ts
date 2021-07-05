import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  // selector: 'mx-cli',
  // selector: '[mx-cli]',
  selector: '.mx-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CliComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input()
  MyInput: string = 'undefined';

  constructor() {}
  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges - when bound property changes');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('OnInit - component has been initialized');
    console.log('Inputs ' + this.MyInput);
  }

  ngDoCheck(): void {
    console.log('DoCheck - Angular change detection run!');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit() - ');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked() - ');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit() - ');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked() - ');
  }
  ngOnDestroy(): void {
    console.log("OnDestroy() - ")
  }
}
