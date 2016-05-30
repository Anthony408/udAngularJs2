/*
 * From Exercise 1, create 'Authors' tag, and data.
 *
 * This is the mock service for Authors that
 * returns the list of Authors when authorService.getAuthors()
 * is invoked.
 */
export class Chapter2ExerciseService{
    getAuthors(): string[] {
        return ['Author1', 'Author2', 'Author3'];
    }
}