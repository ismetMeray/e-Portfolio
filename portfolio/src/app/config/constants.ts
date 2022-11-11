// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class Constants {

    //Generic
    public static TitleOfSite: string = " Portfolio Van Ismet Meray";
    public static readonly API_ENDPOINT: string = 'https://api.github.com/';    

    // Api URls
    public static readonly getAllRepositories: any = Constants.API_ENDPOINT + 'search/repositories?q=user:ismetMeray'
}   