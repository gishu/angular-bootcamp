import { Component } from "@angular/core";

@Component({
    selector: 'mx-handmade-comp',
    template: `<h3>Manual component here</h3>
    <p class="highlight">created by hand</p>`,
    styles: ['.highlight{ color: blue; }']
})
export class HandMadeComponent{

}