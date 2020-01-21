import { TestBed } from '@angular/core/testing';

import { DashboardChartsService } from './dashboard-charts.service';

describe('DashboardChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardChartsService = TestBed.get(DashboardChartsService);
    expect(service).toBeTruthy();
  });
});
