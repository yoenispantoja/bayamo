import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioncitoComponent } from './avioncito.component';

describe('AvioncitoComponent', () => {
  let component: AvioncitoComponent;
  let fixture: ComponentFixture<AvioncitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvioncitoComponent]
    });
    fixture = TestBed.createComponent(AvioncitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
