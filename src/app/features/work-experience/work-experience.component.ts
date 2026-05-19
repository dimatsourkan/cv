import { Component, signal } from '@angular/core';
import { WORK_EXPERIENCE } from './work-experience.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-work-experience',
  imports: [RevealDirective],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  experienceData = signal(WORK_EXPERIENCE);
}
