System.register(['@angular/core', './chapter2.service', './auto-grow.directives'], function(exports_1, context_1) {
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
    var core_1, chapter2_service_1, auto_grow_directives_1;
    var template, Chapter2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chapter2_service_1_1) {
                chapter2_service_1 = chapter2_service_1_1;
            },
            function (auto_grow_directives_1_1) {
                auto_grow_directives_1 = auto_grow_directives_1_1;
            }],
        execute: function() {
            template = "\n<hr>\n<h2>Chapter 2: Courses</h2>\n<h3>Example of introspection and looping over a data-set with *ngFor </h3>\n{{ title }}\n<ul>\n    <li *ngFor=\"let course of courses\">\n        {{ course }}\n    </li>                \n</ul>\n<br>\n<br>\n<h4>Example of 'autoGrow' using a custom directive that listens to events to grow/shrink the text field</h4>\n<input type=\"text\" autoGrow /> <!-- add autoGrow directive -->\n<br>\n<hr>\n";
            Chapter2Component = (function () {
                function Chapter2Component(chapter2Service) {
                    this.title = "the title of the courses page goes here, blah blah blah";
                    this.courses = chapter2Service.getSource();
                }
                Chapter2Component = __decorate([
                    core_1.Component({
                        selector: 'chapter2',
                        template: template,
                        providers: [chapter2_service_1.Chapter2Service],
                        directives: [auto_grow_directives_1.AutoGrowDirective,] // the directives that we need.
                    }), 
                    __metadata('design:paramtypes', [chapter2_service_1.Chapter2Service])
                ], Chapter2Component);
                return Chapter2Component;
            }());
            exports_1("Chapter2Component", Chapter2Component);
        }
    }
});
//# sourceMappingURL=chapter2.component.js.map