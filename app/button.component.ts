import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {BUTTON_DIRECTIVES} from '../node_modules/ng2-bootstrap';

// webpack html imports
let template = require('./buttons-demo.html');

@Component({
    selector: 'buttons-demo',
    template: template,
    directives: [BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class ButtonsDemoComponent {
    public singleModel:string = '1';
    public radioModel:string = 'Middle';
    public checkModel:any = {left: false, middle: true, right: false};
}

