import { Injectable } from '@angular/core';
import { GenericService } from '../generic-abm/services/generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceAService extends GenericService<string> {
  constructor(public httpClient: HttpClient) {
    super('https://restcountries.eu/rest/v2/all', httpClient);
  }
}
