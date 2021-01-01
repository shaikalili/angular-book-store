import { Component,ElementRef,Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
@Input() book: book;
@Input() index:number;
selectedBook:book;
  constructor(private booksService:BooksService,private route:Router) { }

  ngOnInit(): void {
    
  }
  onSelected(selectedBook){
 this.booksService.selectedBook=selectedBook;
 this.route.navigate(['books/'+selectedBook.name]);
  }

}
