import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNavbarComponent } from './cnavbar.component';

describe('CNavbarComponent', () => {
  let component: CNavbarComponent;
  let fixture: ComponentFixture<CNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
