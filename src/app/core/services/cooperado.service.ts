import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cooperado } from 'src/app/shared/models/cooperado.model';

@Injectable({
  providedIn: 'root'
})
export class CooperadoService {

  constructor() {}

  consultarCooperado(cpf: string): Observable<Cooperado> {
    //Mock para simular consulta em api
    const mock: Cooperado = {
      nome: 'Airlon Filho',
      situacao: 'Regular',
      cpf: cpf,
    }

    return of(mock);

  }
}
