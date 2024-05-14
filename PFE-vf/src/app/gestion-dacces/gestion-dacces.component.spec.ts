import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDaccesComponent } from './gestion-dacces.component';

describe('GestionDaccesComponent', () => {
  let component: GestionDaccesComponent;
  let fixture: ComponentFixture<GestionDaccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDaccesComponent]
    });
    fixture = TestBed.createComponent(GestionDaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
