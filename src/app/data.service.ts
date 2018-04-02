import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getData<T>() {
    return this.httpClient.get<T>('http://localhost:5000/api/values');
  }
}
