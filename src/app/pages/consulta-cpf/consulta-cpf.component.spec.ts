import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { ConsultaCpfComponent } from './consulta-cpf.component';
import { CooperadoService } from 'src/app/core/services/cooperado.service';
import { Cooperado } from 'src/app/shared/models/cooperado.model';

describe('ConsultaCpfComponent', () => {
  let component: ConsultaCpfComponent;
  let fixture: ComponentFixture<ConsultaCpfComponent>;
  let cooperadoService: jest.Mocked<CooperadoService>;

  beforeEach(async () => {
    cooperadoService = {
      consultarCooperado: jest.fn(),
    } as unknown as jest.Mocked<CooperadoService>;

    await TestBed.configureTestingModule({
      declarations: [ConsultaCpfComponent],
      providers: [
        FormBuilder,
        { provide: CooperadoService, useValue: cooperadoService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve chamar o serviço de consulta quando o CPF é válido', () => {
    const cpf = '123.456.789-00';
    component.cpfForm.controls['cpf'].setValue(cpf);
    component.cpfForm.updateValueAndValidity(); // Atualiza a validade do formulário

    cooperadoService.consultarCooperado.mockReturnValue(of({
      nome: 'Airlon Filho',
      situacao: 'Regular',
      cpf: '123.456.789-00',
    }));
    
    component.consultarCpf();
  });

  it('deve emitir true quando a consulta é feita com sucesso', () => {
    const cpf = '123.456.789-00';
    component.cpfForm.controls['cpf'].setValue(cpf);
    const mockCooperado: Cooperado = {
      nome: 'Airlon Filho',
      situacao: 'Regular',
      cpf: '123.456.789-00',
    };
    cooperadoService.consultarCooperado.mockReturnValue(of(mockCooperado));

    component.consultaFeita.subscribe((resultado) => {
      expect(resultado).toBe(true);
    });

    component.consultarCpf();
  });

  it('deve resetar o formulário corretamente', () => {
    component.resetarFormulario();

    expect(component.cpfForm.value).toEqual({ cpf: null });
    expect(component.cooperado).toBeNull();
    expect(component.consultaRealizada).toBe(false);
  });
});
