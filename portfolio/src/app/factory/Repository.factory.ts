// Angular Modules 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository';

@Injectable()
export class RepositoryFactory {

    constructor() { 

    }

    createRepository(id: number, name: String, isPrivate: boolean, isCurrentProject: boolean, owner: number, html_url: string, description: string, techStack: string[]){

        return new Repository(id, name, isPrivate, isCurrentProject, owner, html_url, description, techStack)
    }

}