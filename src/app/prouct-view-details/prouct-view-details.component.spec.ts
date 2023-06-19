import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctViewDetailsComponent } from './prouct-view-details.component';

describe('ProuctViewDetailsComponent', () => {
  let component: ProuctViewDetailsComponent;
  let fixture: ComponentFixture<ProuctViewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProuctViewDetailsComponent]
    });
    fixture = TestBed.createComponent(ProuctViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
