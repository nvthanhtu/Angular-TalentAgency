import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TalentsServiceService } from './talents-service.service';

describe('TalentsServiceService', () => {
  let service: TalentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(TalentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
