// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/apontamentos/';  // URL da API

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
