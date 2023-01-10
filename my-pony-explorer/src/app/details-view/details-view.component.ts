import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PonyDataService, Result, Root } from '../pony-data.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css'],
})
export class DetailsViewComponent implements OnInit {
  public charId: string;
  public character?: Result;

  constructor(
    public rickAndMortyService: PonyDataService,
    private route: ActivatedRoute
  ) {
    this.charId = '';
  }
  ngOnInit(): void {
    this.charId = this.route.snapshot.paramMap.get('id')!;
    this.rickAndMortyService
      .loadCharacterById(Number(this.charId))
      .subscribe((data) => (this.character = data));
  }
}
