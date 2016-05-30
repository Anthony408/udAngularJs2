// https://github.com/angular/angular/blob/3229bf16656749427d1def38ced0e1d1d2ae1fa4/CHANGELOG.md angular2/core ==> @angular/core
import {Component} from '@angular/core'
import {Chapter2Service} from './chapter2.service'
import {AutoGrowDirective} from './auto-grow.directives'


let template = `
<hr>
<h2>Chapter 2: Courses</h2>
<h3>Example of introspection and looping over a data-set with *ngFor </h3>
{{ title }}
<ul>
    <li *ngFor="let course of courses">
        {{ course }}
    </li>                
</ul>
<br>
<br>
<h4>Example of 'autoGrow' using a custom directive that listens to events to grow/shrink the text field</h4>
<input type="text" autoGrow /> <!-- add autoGrow directive -->
<br>
<hr>
`

@Component({
    selector: 'chapter2',
    template: template,
    providers: [Chapter2Service], // the components / services we need
    directives: [AutoGrowDirective, ] // the directives that we need.
})

export class Chapter2Component {
    title: string = "the title of the courses page goes here, blah blah blah"
    courses;
    constructor(chapter2Service: Chapter2Service) {
        this.courses = chapter2Service.getSource();
    }
}