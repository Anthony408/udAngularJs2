System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var template, Chapter3Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            template = "\n<h2>  Chapter 3:  binding classes, data, etc </h2>\n\n<br>\nThis button shows blue/gray to illustrate reading a property value\n\n<button \n    class=\"btn btn-primary\"\n    [style.backgroundColor]=\"isBlue ? 'blue' : 'gray' \" \n    (click)=\"onClick($event)\">blue or gray\n</button>\n<br>\nAlso, check the debugging log console, you'll see it print something out each tmie the button is clicked.\n<br>\n\n<h2> These input fields illustrate ngmodel and using it for 2 way data binding</h2>\n<br>\n    <input type=\"text\" [(ngModel)]=\"someValue\" /> <!-- two way binding example, when typing, the preview gets updated -->\n    <input type=\"button\" (click)=\"someValue = ''\" value=\"Clear\"/> <!-- two way binding example (clear the data, also form) -->\n    Preview {{ someValue }}\n<br>\n<hr>\n";
            Chapter3Component = (function () {
                function Chapter3Component() {
                    this.isBlue = true;
                    this.someValue = "foo";
                }
                /*
                 * Section 3, lesson 24 -- event binding.
                 *
                 * example of event binding, see the button object.
                 *
                 * The following binds teh click event from the button to this method:
                 *
                 *                      (click)="onClick($event)"
                 *
                 * Also note, $event is passed from the UI ot back end so the event can be inspected.
                 * This is standard jquery, not angular, angular just allows this by passing '$event'
                 */
                Chapter3Component.prototype.onClick = function ($event) {
                    console.log('button was clicked!', event);
                };
                Chapter3Component = __decorate([
                    core_1.Component({
                        selector: 'chapter3',
                        template: template,
                    }), 
                    __metadata('design:paramtypes', [])
                ], Chapter3Component);
                return Chapter3Component;
            }());
            exports_1("Chapter3Component", Chapter3Component);
        }
    }
});
//# sourceMappingURL=chapter3.component.js.map