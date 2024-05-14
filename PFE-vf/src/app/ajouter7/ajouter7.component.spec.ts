import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajouter7Component } from './ajouter7.component';

describe('Ajouter7Component', () => {
  let component: Ajouter7Component;
  let fixture: ComponentFixture<Ajouter7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ajouter7Component]
    });
    fixture = TestBed.createComponent(Ajouter7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
