import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Author } from '../service/author';
import { SimpleauthorService } from '../service/simple-author-service';

@Component({
  selector: 'app-author-composite',
  templateUrl: './author-composite.component.html',
  styleUrls: ['./author-composite.component.css'],
})
export class AuthorCompositeComponent implements OnInit {
  public author: Author[];
  public selectedauthor: Author;
  public sub: Subscription;

  constructor(private authorService: SimpleauthorService) {}

  ngOnInit(): void {
    this.authorService.getauthors();
    this.sub = this.authorService.update.subscribe((result) => {
      console.log('sub', result);
      this.author = result;
    
    this.selectedauthor = this.author[0];
  });

  }

  selectauthor(author: Author) {
    this.selectedauthor = author;
  }
}
