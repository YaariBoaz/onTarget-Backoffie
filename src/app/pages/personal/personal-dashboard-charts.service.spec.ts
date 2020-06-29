import { TestBed } from '@angular/core/testing';

import { PersonalDashboardChartsService } from './personal-dashboard-charts.service';

describe('PersonalDashboardChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalDashboardChartsService = TestBed.get(PersonalDashboardChartsService);
    expect(service).toBeTruthy();
  });
});
