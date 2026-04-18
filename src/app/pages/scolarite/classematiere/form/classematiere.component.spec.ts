import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassematiereComponent } from '../classematiere.component';

describe('ClassematiereComponent', () => {
  let component: ClassematiereComponent;
  let fixture: ComponentFixture<ClassematiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassematiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassematiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
