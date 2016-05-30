import {Component} from '@angular/core';

// we need to import our CoursesComponent, it exists in the same directory as app.component.ts
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: `
<h1>My First Angular 2 App</h1>
<courses></courses> <!-- added from lessons -->
<authors></authors> <!-- added for exercise --> 
`,
    directives: [CoursesComponent]
})
export class AppComponent { }