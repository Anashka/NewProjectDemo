import { Route } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCompositeComponent } from './book-composite/book-composite.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { CaNotFoundComponent } from './ca-not-found/ca-not-found.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UserManagementModule } from './user-management/user-management.module';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorCompositeComponent } from './author-composite/author-composite.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: AuthorCompositeComponent },

  { path: 'book/list', component: BookListComponent },
  { path: 'book/add', component: BookCreateComponent },
  { path: 'book/details/:bookId', component: BookDetailsComponent },
  { path: 'author/list', component: AuthorListComponent },
  { path: 'author/add', component: AuthorCreateComponent },
  { path: 'author/details/:bookId', component: AuthorDetailsComponent },
  { path: 'user', loadChildren: () => UserManagementModule },
  { path: '404', component: CaNotFoundComponent },
  { path: '**', component: CaNotFoundComponent },
];
