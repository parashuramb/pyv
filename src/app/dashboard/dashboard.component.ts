import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items = [];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        id: 0,
        data: 'hi hello'
      },
      {
        id: 1,
        data: 'this is lyrical'
      },
      {
        id: 2,
        data: 'video show'
      }
    ];
  }

  addItem() {

  }

}
