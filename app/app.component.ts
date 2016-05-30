import {Component} from '@angular/core';
/*
 * TOP level used by main.ts
 */

// import components.
import {Chapter2Component} from './chapter2.component'
import {Chapter2ExerciseComponent} from './chapter2_exercise.component'
import {Chapter3Component} from './chapter3.component'
import {Chapter3ExerciseComponent} from "./chapter3_exercise.component";

let template = `
<h1>Udacity Angular 2 App</h1>

<!-- illustrates all of chapter2, how to use a component, service, template.-->
<chapter2></chapter2> 

<!-- illustrates all of chapter2, how to use a component, service, template.-->
<chapter2_exercise></chapter2_exercise> 

<!-- added for binding examples.  class, property, and data -->
<chapter3></chapter3>     

<!-- added for exercise -->
<chapter3_exercise></chapter3_exercise> 

`

@Component({
    selector: 'my-app',
    template: template,
    directives: [Chapter2Component, Chapter2ExerciseComponent, Chapter3Component, Chapter3ExerciseComponent]
})

export class AppComponent {}