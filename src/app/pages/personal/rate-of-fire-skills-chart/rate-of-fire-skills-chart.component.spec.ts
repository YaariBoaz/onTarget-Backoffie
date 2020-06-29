import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateOfFireSkillsChartComponent } from './rate-of-fire-skills-chart.component';

describe('RateOfFireSkillsChartComponent', () => {
  let component: RateOfFireSkillsChartComponent;
  let fixture: ComponentFixture<RateOfFireSkillsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateOfFireSkillsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateOfFireSkillsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
