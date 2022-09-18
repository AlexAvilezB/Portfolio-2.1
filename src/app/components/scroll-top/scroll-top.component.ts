import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent implements OnInit {
  windowScrolled?: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  ngOnInit(): void {}

  toTop() {
    window.scrollTo(0, 0);
  }
}
