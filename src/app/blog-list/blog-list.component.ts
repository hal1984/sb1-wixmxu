import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, BlogPostComponent, PokemonModalComponent],
  template: `
    <div *ngFor="let pokemon of pokemons">
      <app-blog-post [pokemon]="pokemon" (postClick)="openModal(pokemon)"></app-blog-post>
    </div>
    <app-pokemon-modal *ngIf="selectedPokemon" [pokemon]="selectedPokemon" (close)="closeModal()"></app-pokemon-modal>
  `,
})
export class BlogListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
  }

  openModal(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  closeModal() {
    this.selectedPokemon = null;
  }
}