import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export abstract class GenericService<T> {
  public url: string;

  constructor(@Inject(String) url: string, public httpClient: HttpClient) {
    this.url = url;
  }

  getAll(): Observable<T> {
    return this.httpClient.get<T>(this.url);
  }
}
