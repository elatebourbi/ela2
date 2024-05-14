import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampDeCalculeDynamiqueComponent } from './champ-de-calcule-dynamique.component';

describe('ChampDeCalculeDynamiqueComponent', () => {
  let component: ChampDeCalculeDynamiqueComponent;
  let fixture: ComponentFixture<ChampDeCalculeDynamiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampDeCalculeDynamiqueComponent]
    });
    fixture = TestBed.createComponent(ChampDeCalculeDynamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
