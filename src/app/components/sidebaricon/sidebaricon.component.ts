import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaricon',
  templateUrl: './sidebaricon.component.html',
  styleUrls: ['./sidebaricon.component.scss']
})
export class SidebariconComponent implements OnInit {
  @Input()
  sidebaricon!: string;
  constructor() {
   }

  ngOnInit(): void {

    

  }

}
