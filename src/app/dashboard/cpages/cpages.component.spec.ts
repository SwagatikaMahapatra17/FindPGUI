import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpagesComponent } from './cpages.component';

describe('CpagesComponent', () => {
  let component: CpagesComponent;
  let fixture: ComponentFixture<CpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
