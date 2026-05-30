import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDuTempsCalendarComponent } from './emploi-du-temps-calendar.component';

describe('EmploiDuTempsCalendarComponent', () => {
  let component: EmploiDuTempsCalendarComponent;
  let fixture: ComponentFixture<EmploiDuTempsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploiDuTempsCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploiDuTempsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
