import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDuTempsFormComponent } from './emploi-du-temps-form.component';

describe('EmploiDuTempsFormComponent', () => {
  let component: EmploiDuTempsFormComponent;
  let fixture: ComponentFixture<EmploiDuTempsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploiDuTempsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploiDuTempsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
