import { Component, OnInit } from '@angular/core';
import { RepositoryFactory } from '../../factory/Repository.factory';
import { Repository } from 'src/app/repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  languageList = [
    { code: 'nl', label: 'Dutch' },
    { code: 'en', label: 'English' }
  ];

  //objects
  repositoryFactory: RepositoryFactory

  //variables
  title = 'portfolio'
  repos: any = []
  isLoaded: boolean = false
  birthDay = "1999-12-29"
  birthdayInYears
  selectedRepos = ["Fitness-App-API", "Fitness-App-IOS", "Project-Everyware-blok11-Groep-B"]
//private translate: TranslateService
  constructor() {
    this.repositoryFactory = new RepositoryFactory()
    this.birthdayInYears = this.calculateAge(this.birthDay)
    // translate.setDefaultLang('nl');

  }
  ngOnInit() {
    this.getRepositories()
  }

  changeLang(lang: string) {
    // this.translate.use(lang);
  }

  getRepositories() {

    //Fitness-App-IOS
    let techStackAPI = ["Swift", "SwiftUI", "Javascript", "Express", "MySQL", "XCode"]
    this.repos.push(this.repositoryFactory.createRepository(0, "Fitness-App-IOS", true, true, 1, "https://github.com/ismetMeray/Fitness-App-IOS", "mooie app toch", techStackAPI));

    let techStackEverywhere = ["Java Android", "Javascript", "Express", "MySQL", "CI/CD", "Angular", "Mongoose", "Visual code"]
    this.repos.push(this.repositoryFactory.createRepository(1, "Project-Everyware-blok11-Groep-B", true, false, 1, "https://github.com/ismetMeray/Project-Everyware-blok11-Groep-B", "mooie app toch", techStackEverywhere));

    let techStackMyDentity = ["PHP", "Javascript", "CodeIgniter", "Cassandra", "ChartJS"]
    this.repos.push(this.repositoryFactory.createRepository(2, "MyDentity", true, false, 1, "https://mydentity.com/", "mooie app toch", techStackMyDentity));
    console.log(this.repos)
  }

  calculateAge(birthday: any) {
    let timeDiff = Math.abs(Date.now() - new Date(birthday).getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    console.log(age)
    return age
  }

}




