import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TalentResolveService } from './talent-resolve.service';

describe('TalentResolveService', () => {
  let service: TalentResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientModule
    ],});
    service = TestBed.inject(TalentResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
