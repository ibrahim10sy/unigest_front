import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseMatiereListComponent } from './classe-matiere-list.component';

describe('ClasseMatiereListComponent', () => {
  let component: ClasseMatiereListComponent;
  let fixture: ComponentFixture<ClasseMatiereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseMatiereListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseMatiereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
