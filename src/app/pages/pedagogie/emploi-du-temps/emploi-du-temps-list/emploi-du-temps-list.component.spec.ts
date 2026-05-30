import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDuTempsListComponent } from './emploi-du-temps-list.component';

describe('EmploiDuTempsListComponent', () => {
  let component: EmploiDuTempsListComponent;
  let fixture: ComponentFixture<EmploiDuTempsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploiDuTempsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploiDuTempsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
