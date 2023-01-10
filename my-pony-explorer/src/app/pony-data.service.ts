import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Root {
  info: Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PonyDataService {
  constructor(private http: HttpClient) {}

  public getAllCharacters(page: string | undefined): Observable<Root> {
    return this.http.get<Root>(`${page}`);
  }
  public getCharactersBySearch(query: string): Observable<Root> {
    return this.http.get<Root>(
      `https://rickandmortyapi.com/api/character/${query}`
    );
  }
  public loadCharacterById(charId: number): Observable<Result> {
    return this.http.get<Result>(
      `https://rickandmortyapi.com/api/character/${charId}`
    );
  }
}
