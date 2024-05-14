import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajouter5Component } from './ajouter5.component';

describe('Ajouter5Component', () => {
  let component: Ajouter5Component;
  let fixture: ComponentFixture<Ajouter5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ajouter5Component]
    });
    fixture = TestBed.createComponent(Ajouter5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
