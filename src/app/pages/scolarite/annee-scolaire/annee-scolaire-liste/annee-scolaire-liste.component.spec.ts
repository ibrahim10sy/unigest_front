import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeScolaireListeComponent } from './annee-scolaire-liste.component';

describe('AnneeScolaireListeComponent', () => {
  let component: AnneeScolaireListeComponent;
  let fixture: ComponentFixture<AnneeScolaireListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnneeScolaireListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnneeScolaireListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
