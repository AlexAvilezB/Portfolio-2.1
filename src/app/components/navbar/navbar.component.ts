import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  public show: boolean = false;

  ngOnInit(): void {}

  public showNav() {
    this.show = !this.show;
  }
}
