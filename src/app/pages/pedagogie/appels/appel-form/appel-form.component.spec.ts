import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelFormComponent } from './appel-form.component';

describe('AppelFormComponent', () => {
  let component: AppelFormComponent;
  let fixture: ComponentFixture<AppelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
