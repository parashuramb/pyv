import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PyvService } from 'src/provider/pyv.service';
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
  txtAlign: string;
  constructor(private pyvService: PyvService) { }

  ngOnInit() {
    this.items = this.pyvService.items;
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
    if (e.target.src) {
      this.bgImg = e.target.src;
    }
  }

  fontSize(e) {
    console.log(e.target.value);
    if (e.target.value) {
      this.txtSize = e.target.value;
    }
  }

  textAlign(e) {
    console.log(e);
    this.txtAlign = e;
  }

}
