import { Component } from '@angular/core';

@Component({
  selector: 'app-booksweb',
  template: `
    <app-booksweb-header></app-booksweb-header>
    <div class="content container">
      <div
        style="background: url('./assets/images/books/bg.jpg')"
        class="page-holder bg-cover"
      >
        <router-outlet></router-outlet>
      </div>
      <app-booksweb-footer></app-booksweb-footer>
    </div>
  `,
  styles: [
    `
      .content {
        padding-bottom: 50px;
      }
      .bg-cover {
        background-size: cover !important;
      }
      .page-holder {
        min-height: 100vh;
      }
    `,
  ],
})
export class BooksWebAppComponent {}
