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
<header>
    <!-- hack, get ng2-bootstrap, its not working from npm?!? -->
    <script src="node_modules/ng2-bootstrap/bundles/ng2-bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
</header>

<body>
    <!-- illustrates all of chapter2, how to use a component, service, template.-->
    <chapter2></chapter2> 
    
    <!-- illustrates all of chapter2, how to use a component, service, template.-->
    <chapter2_exercise></chapter2_exercise> 
    
    <!-- added for binding examples.  class, property, and data -->
    <chapter3></chapter3>     
    
    <!-- added for exercise -->
    <chapter3_exercise></chapter3_exercise> 
</body>
`

@Component({
    selector: 'my-app',
    template: template,
    directives: [Chapter2Component, Chapter2ExerciseComponent, Chapter3Component, Chapter3ExerciseComponent]
})

export class AppComponent {}