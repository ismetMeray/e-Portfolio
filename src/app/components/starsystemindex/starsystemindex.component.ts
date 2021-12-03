import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, StarSystem } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-starsystemindex',
  templateUrl: './starsystemindex.component.html',
  styleUrls: ['./starsystemindex.component.scss']
})
export class StarsystemindexComponent implements OnInit {
  public sort: string | undefined;
  public starsystems: Array<StarSystem> | undefined;

  constructor(private httpService: HttpService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchSystemsIndex('metacrit', params['search-games']);
      } else {
        this.searchSystemsIndex('metacrit');
      }
    });
  }
  
  searchSystemsIndex(sort: string, search?: string) {

    this.httpService
      .getStarSystemIndex(sort, search).subscribe((gameList: APIResponse<StarSystem>) => {
        this.starsystems = gameList.results;
        console.log(gameList);
      });
  }

  
  getRandomInt() {
    return Math.round(Math.random() * (15 - 1) + 1);

  }
}
