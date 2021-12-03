import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Planet } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string | undefined;
  public planets: Array<Planet> | undefined;

  constructor(private httpService: HttpService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.getPlanetIndex('metacrit', params['search-games']);
      } else {
        this.getPlanetIndex('metacrit');
      }
    });
  }

  getPlanetIndex(sort: string, search?: string) {

    this.httpService
      .getAllPlanets(sort, search).subscribe((gameList: APIResponse<Planet>) => {
        this.planets = gameList.results;
        console.log(gameList);
      });
  }

  getRandomInt() {
    return Math.round(Math.random() * (15 - 1) + 1);

  }
}
