import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent implements OnInit {

  constructor() { }

  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

}
