// https://github.com/angular/angular/blob/3229bf16656749427d1def38ced0e1d1d2ae1fa4/CHANGELOG.md angular2/core ==> @angular/core
import {Component} from '@angular/core'
import {CourseService} from './courses.service'
import {AutoGrowDirective} from './auto-grow.directives'

@Component({
    selector: 'courses',
    template: `
<h2>Courses</h2>

{{ title }}

<input type="text" autoGrow /> <!-- add autoGrow directive -->
<ul>
    <li *ngFor="let course of courses">
        {{ course }}
    </li>                
</ul>
`,
    providers: [CourseService], // the components / services we need
    directives: [AutoGrowDirective, ] // the directives that we need.

})
export class CoursesComponent {
    title: string = "the title of the courses page goes here, blah blah blah"
    courses;
    constructor(courseService: CourseService) {
        this.courses = courseService.getSource();
    }

}