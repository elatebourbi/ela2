import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesRetardsComponent } from './liste-des-retards.component';

describe('ListeDesRetardsComponent', () => {
  let component: ListeDesRetardsComponent;
  let fixture: ComponentFixture<ListeDesRetardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesRetardsComponent]
    });
    fixture = TestBed.createComponent(ListeDesRetardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
