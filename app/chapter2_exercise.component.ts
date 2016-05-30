// https://github.com/angular/angular/blob/3229bf16656749427d1def38ced0e1d1d2ae1fa4/CHANGELOG.md angular2/core ==> @angular/core
import {Component} from '@angular/core'
import {Chapter2ExerciseService} from './chapter2_exercise.service'

let template = `
<h2>Chapter 2 Exercise: Authors</h2>
{{ title }}
<ul>
<li *ngFor="let author of authors">
    {{ author }}
</li>                
</ul>
`

@Component({
    selector: 'chapter2_exercise', // <chapter2_exercise></chapter2_exercise>
    template: template,
    providers: [Chapter2ExerciseService], // the services that we need, import it from CourseService.
})
export class Chapter2ExerciseComponent  {
    title: string = "Chapter 2 Excercise Title Here";
    authors; // uses constructor instead of being hard coded.
    constructor(chapter2ExerciseService: Chapter2ExerciseService) {
        this.authors = chapter2ExerciseService.getAuthors(); // <== dependency injection handles instantiation here.
    }
}