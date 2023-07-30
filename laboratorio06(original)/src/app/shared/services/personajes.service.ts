import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajesResponse } from '../models/PersonajesResponse';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  constructor(private http: HttpClient) {} //Intanciar el objecto cliente
  //Reutilizar instancias

  getPersonajes(): Observable<PersonajesResponse> {
    //consumir el api  cuando queiro acceder a una intancia de un objecto se usa el this
    return this.http.get<PersonajesResponse>(
      'https://rickandmortyapi.com/api/character'
    );
  }
}
