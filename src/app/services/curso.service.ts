import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {


  constructor(private httpClient: HttpClient) { }

  getEventos(id_user): Observable<any> {
    let eventosUrl = `${environment.apiUrl}/events?id_user=${id_user}`;
    console.log("eventosUrl",eventosUrl);

    return this.httpClient.get<any>(eventosUrl);
  }

}
