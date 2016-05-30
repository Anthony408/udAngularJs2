/*
 * define the service that will return the list of courses
 *
 * Mocks the data
 */

export class CourseService{
    getSource(): string[] {
        /*
         * mock service, return a list of strings for the view.
         */
        return ['course1', 'course2', 'course ...', 'courseN', ]
    }
}