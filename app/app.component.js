System.register(['@angular/core', './chapter2.component', './chapter2_exercise.component', './chapter3.component', "./chapter3_exercise.component"], function(exports_1, context_1) {
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
    var core_1, chapter2_component_1, chapter2_exercise_component_1, chapter3_component_1, chapter3_exercise_component_1;
    var template, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chapter2_component_1_1) {
                chapter2_component_1 = chapter2_component_1_1;
            },
            function (chapter2_exercise_component_1_1) {
                chapter2_exercise_component_1 = chapter2_exercise_component_1_1;
            },
            function (chapter3_component_1_1) {
                chapter3_component_1 = chapter3_component_1_1;
            },
            function (chapter3_exercise_component_1_1) {
                chapter3_exercise_component_1 = chapter3_exercise_component_1_1;
            }],
        execute: function() {
            template = "\n<h1>Udacity Angular 2 App</h1>\n\n<!-- illustrates all of chapter2, how to use a component, service, template.-->\n<chapter2></chapter2> \n\n<!-- illustrates all of chapter2, how to use a component, service, template.-->\n<chapter2_exercise></chapter2_exercise> \n\n<!-- added for binding examples.  class, property, and data -->\n<chapter3></chapter3>     \n\n<!-- added for exercise -->\n<chapter3_exercise></chapter3_exercise> \n\n";
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: template,
                        directives: [chapter2_component_1.Chapter2Component, chapter2_exercise_component_1.Chapter2ExerciseComponent, chapter3_component_1.Chapter3Component, chapter3_exercise_component_1.Chapter3ExerciseComponent]
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