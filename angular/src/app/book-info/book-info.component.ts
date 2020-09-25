import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../service/book';
import { SimpleBookService } from '../service/simple-book-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css'],
})
export class BookInfoComponent implements OnInit {
  @Input() public book: Book;

  constructor(
    private booksService: SimpleBookService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  ondelete(isbn: string) {
    this.booksService.removebook(isbn);
    console.log('total books ', this.booksService.getBooks());
    this.router.navigateByUrl('/book/list');
  }
}
