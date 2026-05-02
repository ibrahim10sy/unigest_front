import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelDetailsComponent } from './appel-details.component';

describe('AppelDetailsComponent', () => {
  let component: AppelDetailsComponent;
  let fixture: ComponentFixture<AppelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppelDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
