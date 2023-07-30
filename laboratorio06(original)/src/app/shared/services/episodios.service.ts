import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import EpisodiosResponse from '../models/EpisodioResponse';
import { HttpClient } from '@angular/common/http';
import { Episodios } from '../models/Episodio';

@Injectable({
  providedIn: 'root',
})
export class EpisodiosService {
  constructor(private http: HttpClient) {} //Intanciar el objecto cliente
  //Reutilizar instancias

  episodios(): Observable<Episodios[]> {
    return this.http
      .get<Episodios[]>('https://rickandmortyapi.com/api/episode')
      .pipe(
        map((response: any) => {
          return response.results;
        })
      );
  }
}
