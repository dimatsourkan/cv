import { Component, signal } from '@angular/core';
import { WORK_EXPERIENCE } from './work-experience.data';
import { JoinPipe } from '../../shared/pipes/join.pipe';

@Component({
  selector: 'app-work-experience',
  imports: [
    JoinPipe
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  experienceData = signal(WORK_EXPERIENCE);
}
