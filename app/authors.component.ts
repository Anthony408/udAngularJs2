// https://github.com/angular/angular/blob/3229bf16656749427d1def38ced0e1d1d2ae1fa4/CHANGELOG.md angular2/core ==> @angular/core
import {Component} from '@angular/core'
import {AuthorsService} from './authors.service'

@Component({
    selector: 'authors', // <authors></authors>
    template: `
<h2>Authors</h2>
{{ title }}
<ul>
<li *ngFor="let author of authors">
    {{ author }}
</li>                
</ul>
`,
    providers: [AuthorsService], // the services that we need, import it from CourseService.
})
export class AuthorsComponent {

    title: string = "the title for the Authors Page"
    authors; // uses constructor instead of being hard coded.
    constructor(authorsService: AuthorsService) {
        this.authors = authorsService.getAuthors(); // <== dependency injection handles instantiation here.
    }
}