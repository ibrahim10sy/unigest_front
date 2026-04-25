import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantDetailComponent } from './enseignant-detail.component';

describe('EnseignantDetailComponent', () => {
  let component: EnseignantDetailComponent;
  let fixture: ComponentFixture<EnseignantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnseignantDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnseignantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
