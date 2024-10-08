import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="onClose()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <h2>{{ pokemon.name }}</h2>
        <img [src]="pokemon.imageUrl" [alt]="pokemon.name">
        <p><strong>Height:</strong> {{ pokemon.height }}</p>
        <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
        <h3>Types:</h3>
        <ul>
          <li *ngFor="let type of pokemon.types">{{ type }}</li>
        </ul>
        <h3>Abilities:</h3>
        <ul>
          <li *ngFor="let ability of pokemon.abilities">{{ ability }}</li>
        </ul>
        <h3>Stats:</h3>
        <ul>
          <li *ngFor="let stat of pokemon.stats">{{ stat.name }}: {{ stat.value }}</li>
        </ul>
        <button (click)="onClose()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      width: 75%;
      max-height: 80vh;
      overflow-y: auto;
    }
    img {
      max-width: 200px;
      display: block;
      margin: 0 auto;
    }
    button {
      display: block;
      margin: 20px auto 0;
      padding: 10px 20px;
      background-color: #3c5aa6;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `]
})
export class PokemonModalComponent {
  @Input() pokemon!: Pokemon;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}