import {Component} from '@angular/core';
/*
 * TOP level used by main.ts
 */

// import components.
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
// import {ButtonsDemoComponent} from "./button.component";

@Component({
    selector: 'my-app',
    template: `
<h1>My First Angular 2 App</h1>
<courses></courses> <!-- added from lessons -->
<authors></authors> <!-- added for exercise --> 
<!-- Section 3, lesson 23 -- class binding. (style.backgroundColor ...) below -->
<button 
    class="btn btn-primary"
    [style.backgroundColor]="isBlue ? 'blue' : 'gray' " 
    (click)="onClick($event)">blue or gray</button>    
<!-- <buttons-demo></buttons-demo> --> <!-- added for attempting to get bootstrap to work, not yet -->
`,
    directives: [CoursesComponent, AuthorsComponent, /**ButtonsDemoComponent**/]
})

export class AppComponent {
    isBlue=true;

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