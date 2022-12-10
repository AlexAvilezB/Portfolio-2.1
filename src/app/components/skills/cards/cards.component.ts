import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  public flipped1: boolean = false;
  public flipped2: boolean = false;

  constructor() {}

  toggleFlip1() {
    this.flipped1 = !this.flipped1;
  }

  toggleFlip2() {
    this.flipped2 = !this.flipped2;
  }

  ngOnInit(): void {
  }

}
