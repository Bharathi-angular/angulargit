import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Form } from './form-template.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'http://localhost:3000/Form'; 

  constructor(private http: HttpClient) { }

  getFormDetails(): Observable<Form[]> {
    return this.http.get<Form[]>(this.apiUrl);
  }

  /** GET: get item by id */
  getData(id: number): Observable<Form> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Form>(url);
  }

  /** POST: add a new item */
  addData(form: Form): Observable<Form> {
    return this.http.post<Form>(this.apiUrl, form);
  }

 
   



}