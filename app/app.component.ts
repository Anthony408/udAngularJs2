import {Component} from '@angular/core';

/*
 * TOP level used by main.ts
 */

// import components.
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `
<h1>My First Angular 2 App</h1>
<courses></courses> <!-- added from lessons -->
<authors></authors> <!-- added for exercise --> 
`,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }