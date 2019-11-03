import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PyvService } from 'src/provider/pyv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // @Input() items = [];
  editable = [];
  constructor(private pyvService: PyvService) { }

  ngOnInit() {
    this.pyvService.items = [
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
      },
      {
        id: 3,
        data: 'video show'
      }
    ];
    const editable = [];
    this.pyvService.items.forEach((el, index) => {
      editable[index] = false;
    });
    this.editable = editable;
  }

  addLyric() {
    const lyricdata = (<HTMLInputElement>document.getElementById('lyric')).value;
    if (lyricdata) {
      const lyric = {
        id: this.pyvService.items.length,
        data: lyricdata
      };
      this.pyvService.items.push(lyric);
      (<HTMLInputElement>document.getElementById('lyric')).value = "";
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pyvService.items, event.previousIndex, event.currentIndex);
  }

  dropToPush(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pyvService.items, event.previousIndex, event.currentIndex);
  }

  edit(i) {
    this.editable[i] = !this.editable[i];
  }

  delete(i) {
    console.log('dele', i);
    this.pyvService.items.splice(i, 1);
  }

}
