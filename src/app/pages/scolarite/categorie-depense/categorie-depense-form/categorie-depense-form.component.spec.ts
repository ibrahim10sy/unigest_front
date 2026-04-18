import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieDepenseFormComponent } from './categorie-depense-form.component';

describe('CategorieDepenseFormComponent', () => {
  let component: CategorieDepenseFormComponent;
  let fixture: ComponentFixture<CategorieDepenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieDepenseFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorieDepenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
