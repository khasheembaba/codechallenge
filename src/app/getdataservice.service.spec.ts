/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetdataserviceService } from './getdataservice.service';

describe('GetdataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetdataserviceService]
    });
  });

  it('should ...', inject([GetdataserviceService], (service: GetdataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
