import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillCardComponent } from './drill-card.component';

describe('TrainCardComponent', () => {
  let component: DrillCardComponent;
  let fixture: ComponentFixture<DrillCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
