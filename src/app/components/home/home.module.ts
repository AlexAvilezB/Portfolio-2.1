import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { GreetingComponent } from './greeting/greeting.component';



@NgModule({
  declarations: [
    SocialIconsComponent,
    ScrollDownComponent,
    GreetingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SocialIconsComponent,
    ScrollDownComponent,
    GreetingComponent
  ],
})
export class HomeModule { }
