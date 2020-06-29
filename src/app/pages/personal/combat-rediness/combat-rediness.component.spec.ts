import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatRedinessComponent } from './combat-rediness.component';

describe('CombatRedinessComponent', () => {
  let component: CombatRedinessComponent;
  let fixture: ComponentFixture<CombatRedinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatRedinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatRedinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
