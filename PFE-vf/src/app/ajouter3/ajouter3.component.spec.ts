import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajouter3Component } from './ajouter3.component';

describe('Ajouter3Component', () => {
  let component: Ajouter3Component;
  let fixture: ComponentFixture<Ajouter3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ajouter3Component]
    });
    fixture = TestBed.createComponent(Ajouter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
