// imports from angular framework
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// imports from my own code
import { BooksWebAppComponent } from './books-web-app.component';
import { BooksWebHeaderComponent } from './books-web-header-component/books-web-header.component';
import { BooksWebFooterComponent } from './books-web-footer.component';

import { BookInfoComponent } from './book-info/book-info.component';
import { BookListComponent } from './book-list/book-list.component';
import { CaRangeComponent } from './ca-range/ca-range.component';
import { CaRatingComponent } from './ca-rating/ca-rating.component';
import { AltvaluePipe } from './altvalue.pipe';
import { PrefixPipe } from './prefix.pipe';

import { RatingadvisePipe } from './ratingadvise.pipe';
import { BookCompositeComponent } from './book-composite/book-composite.component';

// get the route details
import { appRoutes } from './routes';
import { CaNotFoundComponent } from './ca-not-found/ca-not-found.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CaRainbowColorDirective } from './ca-rainbow-color.directive';
import { SimpleBookService } from './service/simple-book-service';
import { SimpleauthorService } from './service/simple-author-service';
import { UserManagementModule } from './user-management/user-management.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorCompositeComponent } from './author-composite/author-composite.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UserManagementModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
  ],

  declarations: [
    BooksWebAppComponent,
    BooksWebHeaderComponent,
    BooksWebFooterComponent,
    BookInfoComponent,
    BookListComponent,
    CaRangeComponent,
    CaRatingComponent,
    AltvaluePipe,
    PrefixPipe,
    RatingadvisePipe,
    BookCompositeComponent,
    CaNotFoundComponent,
    BookCreateComponent,

    BookDetailsComponent,

    CaRainbowColorDirective,

    AuthorCreateComponent,

    AuthorListComponent,

    AuthorInfoComponent,

    AuthorDetailsComponent,

    AuthorCompositeComponent,
  ],

  providers: [SimpleBookService, SimpleauthorService],

  bootstrap: [BooksWebAppComponent],
})
export class AppModule {}
