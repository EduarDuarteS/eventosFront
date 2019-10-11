import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService{

  private headers: HttpHeaders;
  private URL_HOST: string = 'http://127.0.0.1:8000/';
  private userToken: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain'});
  }

  getAllContent(): Observable<any> {
    return this.http.get(this.URL_HOST + 'content/cont_interactivo');
  }
}