import { TestBed } from '@angular/core/testing';

import { PageLinkService } from './page-link.service';

describe('PageLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageLinkService = TestBed.get(PageLinkService);
    expect(service).toBeTruthy();
  });
});