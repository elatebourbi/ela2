import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesPointagesComponent } from './liste-des-pointages.component';

describe('ListeDesPointagesComponent', () => {
  let component: ListeDesPointagesComponent;
  let fixture: ComponentFixture<ListeDesPointagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesPointagesComponent]
    });
    fixture = TestBed.createComponent(ListeDesPointagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
