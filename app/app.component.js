System.register(['@angular/core', './courses.component', './authors.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            }],
        execute: function() {
            // import {ButtonsDemoComponent} from "./button.component";
            AppComponent = (function () {
                function AppComponent() {
                    this.isBlue = true;
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
                AppComponent.prototype.onClick = function ($event) {
                    console.log('button was clicked!', event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<h1>My First Angular 2 App</h1>\n<courses></courses> <!-- added from lessons -->\n<authors></authors> <!-- added for exercise --> \n<!-- Section 3, lesson 23 -- class binding. (style.backgroundColor ...) below -->\n<button \n    class=\"btn btn-primary\"\n    [style.backgroundColor]=\"isBlue ? 'blue' : 'gray' \" \n    (click)=\"onClick($event)\">blue or gray</button>    \n<!-- <buttons-demo></buttons-demo> --> <!-- added for attempting to get bootstrap to work, not yet -->\n",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent,]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map