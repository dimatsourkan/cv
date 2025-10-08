import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsExperienceComponent } from './tools-experience.component';

describe('ToolsExperienceComponent', () => {
  let component: ToolsExperienceComponent;
  let fixture: ComponentFixture<ToolsExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
