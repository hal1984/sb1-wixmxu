import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-post" (click)="onPostClick()">
      <h2>{{ pokemon.name }}</h2>
      <img [src]="pokemon.imageUrl" [alt]="pokemon.name">
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }}</p>
      <h3>Types:</h3>
      <ul>
        <li *ngFor="let type of pokemon.types">{{ type }}</li>
      </ul>
    </div>
  `,
  styles: [`
    .blog-post {
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .blog-post:hover {
      background-color: #f0f0f0;
    }
    img {
      max-width: 200px;
    }
  `]
})
export class BlogPostComponent {
  @Input() pokemon!: Pokemon;
  @Output() postClick = new EventEmitter<Pokemon>();

  onPostClick() {
    this.postClick.emit(this.pokemon);
  }
}