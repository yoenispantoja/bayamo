/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilmesService } from './filmes.service';

describe('Service: Filmes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmesService]
    });
  });

  it('should ...', inject([FilmesService], (service: FilmesService) => {
    expect(service).toBeTruthy();
  }));
});
