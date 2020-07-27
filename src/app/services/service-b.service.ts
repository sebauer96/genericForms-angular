import { Injectable } from '@angular/core';
import { GenericService } from '../generic-abm/services/generic.service';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceBService extends GenericService <Pais> {
  constructor(public httpClient: HttpClient) {
    super('https://restcountries.eu/rest/v2/name/aruba?fullText=true', httpClient);
  }
}
