// https://github.com/angular/angular/blob/3229bf16656749427d1def38ced0e1d1d2ae1fa4/CHANGELOG.md angular2/core ==> @angular/core
import {Component} from '@angular/core'
import {CourseService} from './courses.service'

@Component({
    selector: 'courses',
    template: `
<h2>Courses</h2>
{{ title }}
<ul>
<li *ngFor="#course of courses">
    {{ course }}
</li>                
</ul>
`,
    providers: [CourseService], // the services that we need, import it from CourseService.
})
export class CoursesComponent {

    // SIMPLE example interpolation, this title will be injected into the template {{title}}
    title: string = "the title of the courses page goes here, blah blah blah"

    // LIST example (courses) ... commented out to use a constructor / service
    // courses: string[] = ['Course1', 'Course2', 'Course...', 'CourseN'];
    courses; // uses constructor instead of being hard coded.

    // use a NON COUPLED constructor (do NOT use the New() here, not good for unit testing, and refactoring)
    constructor(courseService: CourseService) {
        this.courses = courseService.getSource(); // <== dependency injection handles instantiation here.
    }
}