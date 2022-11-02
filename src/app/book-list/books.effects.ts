import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators"
import { GoogleBooksService } from './books.service'
import * as bookOps from '../state/books.actions'


@Injectable()
export class BookEffects {

    constructor(
        private actions$: Actions, 
        private booksService: GoogleBooksService
    ){}

    loadBooks$ = createEffect(()=>
        this.actions$.pipe(
            ofType(bookOps.loadBooks),
            mergeMap(() => this.booksService.getBooks()
            .pipe(
                map(books => bookOps.retrievedBookList({ books })),
                catchError(error => of(bookOps.retrievedBookListFailure({ error })))
            )
            )
        )
    )
}