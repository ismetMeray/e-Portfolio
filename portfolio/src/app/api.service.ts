import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, Observer, throwError } from 'rxjs';
import { Constants } from './config/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // public getRepositories(): Observable<any> {
  //   return this.httpClient.get(Constants.getAllRepositories, {
  //     headers: { 'Authorization': environment.apikey}
  //   }).pipe(catchError(error => this.throwError(error)))

  //   // var repositories: Observer<Repository> = []
  //   // const result = await this.octokit.request("GET /user/repos", {})  
  //   // console.log(result.data)
  //   // var ownerjson = result.data[0].owner
  //   // var owner = new Owner(ownerjson.login, ownerjson.id, ownerjson.node_id, ownerjson.avatar_url, ownerjson.gravatar_id, ownerjson.url, ownerjson.html_url)

  //   // result.data.forEach(function (repo) {
  //   //   var newRepo = new Repository(repo.id, repo.name, repo.full_name, repo.private, owner, repo.html_url, repo.description)
  //   //   repositories.push(newRepo)
  //   // })
  //   // return repositories;
  // }

  throwError(error: any) {
    console.error(error);
    return throwError(() => new Error(error.json().error || 'Server error'));
  }
}



// get(url: string, options: {
//   headers?: HttpHeaders;
//   observe: 'response';
//   params?: HttpParams;
//   reportProgress?: boolean;
//   responseType?: 'json';
//   withCredentials?: boolean;
// }): Observable<HttpResponse<Object>>;
//It takes a REST API endpoint and an optional options object and returns an Observable instance.