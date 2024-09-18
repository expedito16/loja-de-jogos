import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  url = 'http://localhost:3000/listaJogos';

  constructor(
    private http: HttpClient
  ) { }

  getListaJogos(): Observable<any> {
    return this.http.get(this.url)
  }

  criarNovoJogo(jogo: any): Observable<any> {
    return this.http.post(this.url, jogo);
  }

  visualizarJogoCriadoPorId(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}
