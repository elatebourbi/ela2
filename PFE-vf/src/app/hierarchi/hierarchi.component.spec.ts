import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchiComponent } from './hierarchi.component';

describe('HierarchiComponent', () => {
  let component: HierarchiComponent;
  let fixture: ComponentFixture<HierarchiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HierarchiComponent]
    });
    fixture = TestBed.createComponent(HierarchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
