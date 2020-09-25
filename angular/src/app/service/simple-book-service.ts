import { Book } from './book';
import { BookService } from './book-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class SimpleBookService implements BookService {
  constructor(private http: HttpClient) {
    this.serviceId = ++SimpleBookService.serviceCount;
    console.log(`SimpleBookService created with id ${this.serviceId}`);

    this.books = this.books = [
      {
        title: 'The love from star',
        author: 'Lee min HO',
        description: 'kOREAN BEST DRAMA fICTION',
        isbn: '00108',
        pages: 350,
        votes: 39,
        series: 'The Lost Epic',
        seriesIndex: 1,
        price: 199,
        rating: 4.8,
        releaseDate: '01/15/2020',
        cover: 'the-accursed-god-w.jpg',
        tags: 'Indian Epic, Mahabharata, Book Series'.split(','),
      },
      {
        title: 'Moris',
        author: 'Desilwa Morris',
        description:
          'The story of a person wrongly implicated for a false crime and is send to prison. He returns  to seek the vengeane, love and justice.',
        isbn: '7126',

        releaseDate: '01/04/1836',
        pages: 350,
        votes: 12000,
        price: 250,
        rating: 4.8,
        cover: '',
        tags: 'Crime,Adventure,Classic,Best-Seller,Revenge,Justice'.split(','),
      },
      {
        title: 'Jane AUSTIN',
        author: 'jANE AUSTIN',
        description:
          'story of two men born on the same date on opposite side of the globe and economy and years later fate brings them for a head on collission. The best selling book by the author.',
        isbn: '78983',
        releaseDate: '01/05/1977',
        price: 220,
        pages: 350,
        votes: 1500,
        rating: 3.5,
        cover: '',
        tags: 'best-seller,chronology'.split(','),
      },
      {
        title: 'Sheshan sambargi',
        author: 'Sheshan anuk sambargi',
        description:
          'A poetic tale of Karna of Mahabharat. The seven chapter gives a glimpse of the life and harship of one of the greatest warrior of his time',
        isbn: '10588193',
        price: 450,
        pages: 110,
        votes: 4500,
        releaseDate: '01/05/1953',
        rating: 4.5,
        cover: '',
        tags: 'classic, poetry, mahabharata, karna, hindi'.split(','),
      },
    ];
  }
  static serviceCount = 0;
  private books: Book[];
  private serviceId;

  addBook(book: Book): boolean {
    if (book && book.isbn && book.title && book.author) {
      //  this.http.post('localhost:8030/api/book/addbook/',book).subscribe((output)=>{
      //   console.log(output)
      // })
      this.books.push(book);
      return true;
    } else {
      return false;
    }
  }

  getBooks(): Book[] {
    //  this.http.get('localhost:8030/api/book/findall').subscribe((output)=>{
    //   console.log(output)
    // })
    return this.books;
  }

  getBook(isbn: string): Book {
    //  this.http.get('localhost:8030/api/book/find/'+isbn).subscribe((output)=>{
    //   console.log(output)
    // })
    return this.books.find((b) => b.isbn === isbn);
  }
  removebook(isbn: string) {
    const newList = [];
    //  this.http.delete('localhost:8030/api/book/removebook/'+isbn).subscribe((output)=>{
    //   console.log(output)
    // })
    for (const book of this.books) {
      if (book.isbn !== isbn) {
        newList.push(book);
      }
    }
    this.books = newList;
    console.log('deleted the list');
    console.log(this.books);
  }
}
