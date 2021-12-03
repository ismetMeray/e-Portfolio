import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})

export class SearchbarComponent implements OnInit {
  searchBarProperty = "Good day sir!";
  constructor() { }

  ngOnInit(): void {
    
  }

}
