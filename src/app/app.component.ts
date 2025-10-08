import { Component } from '@angular/core';
import { HeaderComponent } from './features/header/header.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { LocationComponent } from './features/location/location.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ToolsExperienceComponent } from './features/tools-experience/tools-experience.component';
import { WorkExperienceComponent } from './features/work-experience/work-experience.component';
import { EducationComponent } from './features/education/education.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ContactsComponent,
    LocationComponent,
    AboutMeComponent,
    ToolsExperienceComponent,
    WorkExperienceComponent,
    EducationComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cv';
}
