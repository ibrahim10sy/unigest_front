import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelSeanceComponent } from './appel-seance.component';

describe('AppelSeanceComponent', () => {
  let component: AppelSeanceComponent;
  let fixture: ComponentFixture<AppelSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppelSeanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppelSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
