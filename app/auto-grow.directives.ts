
// Directive: so we can use/define a @Directive.
// ElementRef: service from angular to access the host element.
// Renderer: service from angular to modify the host element.

import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()',
    },
})

export class AutoGrowDirective {

    constructor(
        private el: ElementRef,  // private key word automatically creates instances.
        private renderer: Renderer  // private key word automatically creates instances.
    ){}

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200') // arbitrary values, just static simple example.
        console.log("in onFocus()");  // in debug mode from chrome, view console output, this prints.
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120') // arbitrary values, just static simple example.
        console.log("in onBlur()");  // in debug mode from chrome, view console output, this prints.
    }
}