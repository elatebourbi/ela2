import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajouter6Component } from './ajouter6.component';

describe('Ajouter6Component', () => {
  let component: Ajouter6Component;
  let fixture: ComponentFixture<Ajouter6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ajouter6Component]
    });
    fixture = TestBed.createComponent(Ajouter6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
