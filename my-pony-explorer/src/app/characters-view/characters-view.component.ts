import { Component, OnInit } from '@angular/core';
import { PonyDataService } from '../pony-data.service';
import { Root } from '../pony-data.service';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.css'],
})
export class CharactersViewComponent implements OnInit {
  public characters?: Root;
  public actPage: number;
  public searchInput: string;
  constructor(public ponyService: PonyDataService) {
    this.actPage = 0;
    this.searchInput = '';
  }

  ngOnInit(): void {
    this.loadCharactersAt('https://rickandmortyapi.com/api/character/?page=1');
  }
  public loadCharactersAt(page: string | undefined): void {
    this.ponyService
      .getAllCharacters(page)
      .subscribe((data) => (this.characters = data));
    this.actPage = Number(page?.slice(page?.indexOf('=') + 1));
  }
  public searchCharacter(): void {
    let query = '?name=' + this.searchInput;
    this.ponyService
      .getCharactersBySearch(query)
      .subscribe((data) => (this.characters = data));
  }
  public clearSearch(): void {
    this.searchInput = '';
    this.searchCharacter();
  }
}
