import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['search-games']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string) {

    this.httpService
      .getGameList(sort, search).subscribe((planetList: APIResponse<Planet>) => {
        this.planets = planetList.results;
        console.log(this.planets);
        console.log(planetList);
        // for(var i = 0; i < planetList.; i++){
        //   console.log(planetList[i]);
        // }
        
      });
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }
}
