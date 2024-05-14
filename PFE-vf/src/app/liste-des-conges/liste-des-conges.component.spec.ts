import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesCongesComponent } from './liste-des-conges.component';

describe('ListeDesCongesComponent', () => {
  let component: ListeDesCongesComponent;
  let fixture: ComponentFixture<ListeDesCongesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesCongesComponent]
    });
    fixture = TestBed.createComponent(ListeDesCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
