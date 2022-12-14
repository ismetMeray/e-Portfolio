
export class Repository { 

    constructor(id: number, name: String, isPrivate: boolean, isCurrentProject: boolean, owner: number, html_url: string, description: string, techStack: string[]){
        this.id = id;
        this.name = name
        this.isPrivate = isPrivate
        this.isCurrentProject = isCurrentProject
        this.owner = owner
        this.html_url = html_url
        this.description = description
        this.techStack = techStack
    }


    id: number;
    name: String;
    isPrivate: boolean;
    isCurrentProject: boolean;
    owner: number;
    html_url: string;
    description: string;
    techStack: string[]
}
