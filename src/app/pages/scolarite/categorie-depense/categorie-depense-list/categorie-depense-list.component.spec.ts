import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieDepenseListComponent } from './categorie-depense-list.component';

describe('CategorieDepenseListComponent', () => {
  let component: CategorieDepenseListComponent;
  let fixture: ComponentFixture<CategorieDepenseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieDepenseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorieDepenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
