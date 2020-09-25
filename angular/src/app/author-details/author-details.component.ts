import { Component, OnInit } from '@angular/core';
import { Author } from '../service/author';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleauthorService } from '../service/simple-author-service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css'],
})
export class AuthorDetailsComponent implements OnInit {
  public selectedauthor: Author;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authorService: SimpleauthorService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.bookId;
    console.log(id);
    const author = this.authorService.getauthor(id);

    if (author) {
      this.selectedauthor = author;
    } else {
      this.router.navigateByUrl(`/404?error=No Such author&id=${id}`);
    }
  }

  goBack() {
    this.router.navigateByUrl('/author/list');
  }
}
