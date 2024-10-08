import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from './pokemon.model';

interface PokemonListResponse {
  results: { url: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 10): Observable<Pokemon[]> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}/pokemon?limit=${limit}`).pipe(
      switchMap((response: PokemonListResponse) => {
        const pokemonUrls = response.results.map(result => result.url);
        return forkJoin(pokemonUrls.map(url => this.http.get<any>(url)));
      }),
      map((pokemonData: any[]) => {
        return pokemonData.map(data => ({
          name: data.name,
          imageUrl: data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map((type: any) => type.type.name),
          abilities: data.abilities.map((ability: any) => ability.ability.name),
          stats: data.stats.map((stat: any) => ({
            name: stat.stat.name,
            value: stat.base_stat
          }))
        }));
      })
    );
  }
}