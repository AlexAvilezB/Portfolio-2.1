import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
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

  ngOnInit(): void {}
}
