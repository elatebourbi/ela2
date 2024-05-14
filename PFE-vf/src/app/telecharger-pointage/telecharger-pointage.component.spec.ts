import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelechargerPointageComponent } from './telecharger-pointage.component';

describe('TelechargerPointageComponent', () => {
  let component: TelechargerPointageComponent;
  let fixture: ComponentFixture<TelechargerPointageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelechargerPointageComponent]
    });
    fixture = TestBed.createComponent(TelechargerPointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
