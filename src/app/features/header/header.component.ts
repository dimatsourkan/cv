import { Component } from '@angular/core';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-header',
  imports: [
    ParallaxDirective,
    AvatarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
