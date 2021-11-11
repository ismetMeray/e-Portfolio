import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Planet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Planet>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Planet>>(`${env.BASE_URL}/api/exoplanet`, {
      params: params,
    });
  }

  // getGameDetails(id: string): Observable<Planet> {
  //   const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
  //   const gameTrailersRequest = this.http.get(
  //     `${env.BASE_URL}/games/${id}/movies`
  //   );
  //   const gameScreenshotsRequest = this.http.get(
  //     `${env.BASE_URL}/games/${id}/screenshots`
  //   );

  //   return forkJoin({
  //     gameInfoRequest,
  //     gameScreenshotsRequest,
  //     gameTrailersRequest,
  //   }).pipe(
  //     map((resp: any) => {
  //       return {
  //         ...resp['gameInfoRequest'],
  //         screenshots: resp['gameScreenshotsRequest']?.results,
  //         trailers: resp['gameTrailersRequest']?.results,
  //       };
  //     })
  //   );
  // }
}