import { Component } from '@angular/core';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    ParallaxDirective,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
