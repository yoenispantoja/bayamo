import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrencitoComponent } from './trencito.component';

describe('TrencitoComponent', () => {
  let component: TrencitoComponent;
  let fixture: ComponentFixture<TrencitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrencitoComponent]
    });
    fixture = TestBed.createComponent(TrencitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
