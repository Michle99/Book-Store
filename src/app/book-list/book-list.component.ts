import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

}
