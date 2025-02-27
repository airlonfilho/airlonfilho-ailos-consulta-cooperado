import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CooperadoService } from './cooperado.service';
import { Cooperado } from 'src/app/shared/models/cooperado.model';

describe('CooperadoService', () => {
  let service: CooperadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a Cooperado when consultarCooperado is called', (done) => {
    const cpf = '123.456.789-00';
    const expectedCooperado: Cooperado = {
      nome: 'Airlon Filho',
      situacao: 'Regular',
      cpf: cpf,
    };

    service.consultarCooperado(cpf).subscribe((cooperado) => {
      expect(cooperado).toEqual(expectedCooperado);
      done();
    });
  });
});
