import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsCardsComponent } from '../projects/projects-cards/projects-cards.component';



@NgModule({
  declarations: [
    ProjectsCardsComponent
  ],
  exports: [
    ProjectsCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
