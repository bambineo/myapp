import { TestBed, inject } from '@angular/core/testing';

import { Gw2Service } from './gw2.service';

describe('Gw2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Gw2Service]
    });
  });

  it('should be created', inject([Gw2Service], (service: Gw2Service) => {
    expect(service).toBeTruthy();
  }));
});
