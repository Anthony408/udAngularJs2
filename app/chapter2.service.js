/*
 * define the service that will return the list of courses
 *
 * Mocks the data
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Chapter2Service;
    return {
        setters:[],
        execute: function() {
            Chapter2Service = (function () {
                function Chapter2Service() {
                }
                Chapter2Service.prototype.getSource = function () {
                    /*
                     * mock service, return a list of strings for the view.
                     */
                    return ['course1', 'course2', 'course ...', 'courseN', 'foo', 'blah', 'ok'];
                };
                return Chapter2Service;
            }());
            exports_1("Chapter2Service", Chapter2Service);
        }
    }
});
//# sourceMappingURL=chapter2.service.js.map