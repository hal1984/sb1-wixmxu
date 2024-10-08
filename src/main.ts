import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BlogListComponent } from './app/blog-list/blog-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BlogListComponent],
  template: `
    <h1>Pokemon Blog</h1>
    <app-blog-list></app-blog-list>
  `,
})
export class App {
  name = 'Pokemon Blog';
}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});