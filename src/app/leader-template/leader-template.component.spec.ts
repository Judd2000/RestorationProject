import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderTemplateComponent } from './leader-template.component';

describe('LeaderTemplateComponent', () => {
  let component: LeaderTemplateComponent;
  let fixture: ComponentFixture<LeaderTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
