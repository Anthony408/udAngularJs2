import {Component} from '@angular/core'

let template = `
<h2>  Chapter 3:  binding classes, data, etc </h2>

<br>
This button shows blue/gray to illustrate reading a property value

<button 
    class="btn btn-primary"
    [style.backgroundColor]="isBlue ? 'blue' : 'gray' " 
    (click)="onClick($event)">blue or gray
</button>
<br>
Also, check the debugging log console, you'll see it print something out each tmie the button is clicked.
<br>

<h2> These input fields illustrate ngmodel and using it for 2 way data binding</h2>
<br>
    <input type="text" [(ngModel)]="someValue" /> <!-- two way binding example, when typing, the preview gets updated -->
    <input type="button" (click)="someValue = ''" value="Clear"/> <!-- two way binding example (clear the data, also form) -->
    Preview {{ someValue }}
<br>
<hr>
`

@Component({
    selector: 'chapter3', // <chapter3></chapter3>
    template: template,
})

export class Chapter3Component {
    isBlue=true;
    someValue: string = "foo";

    /*
     * Section 3, lesson 24 -- event binding.
     *
     * example of event binding, see the button object.
     *
     * The following binds teh click event from the button to this method:
     *
     *                      (click)="onClick($event)"
     *
     * Also note, $event is passed from the UI ot back end so the event can be inspected.
     * This is standard jquery, not angular, angular just allows this by passing '$event'
     */
    onClick($event){
        console.log('button was clicked!', event)
    }
}