import { Component } from '@angular/core';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';

@Component({
  selector: 'app-header',
  imports: [
    ParallaxDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  print() {
    window.print();
  }
}
