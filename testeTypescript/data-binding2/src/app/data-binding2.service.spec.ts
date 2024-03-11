import { TestBed } from '@angular/core/testing';

import { DataBinding2Service } from './data-binding2.service';

describe('DataBinding2Service', () => {
  let service: DataBinding2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBinding2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
