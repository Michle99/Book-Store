import { createAction, props} from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const loadBooks = createAction(
    '[Book List] Load Books'
);

export const addBook = createAction(
    '[Book List] Add Book',
    props<{ bookId: string }>()
);

export const removeBook = createAction(
    '[Book Collection] Remove Book',
    props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
    '[Book List/API] Retrieve Books Success',
    props<{ books: ReadonlyArray<Book> }>()
);

export const retrievedBookListFailure = createAction(
    '[Book List/API] Retrieve Books Failure',
    props<{ error: string }>()
);