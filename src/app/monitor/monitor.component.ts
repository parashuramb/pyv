import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  items = [];
  images = [];
  bgImg;
  txtcolor = 'white';
  BgColor = 'black';
  txtSize: any = '';
  constructor(private santisized: DomSanitizer) { }

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
    this.images = [
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

  selectBgImage(e) {
    console.log(e.target.src);
    if(e.target.src) {
      this.bgImg =e.target.src;
    }
  }

  fontSize(e) {
    console.log(e.target.value);
    if(e.target.value) {
      this.txtSize =e.target.value;
    }
  }

}
