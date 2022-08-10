import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toTop() {
    window.scrollTo(0, 0);
  }
}
