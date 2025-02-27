import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CooperadoService } from 'src/app/core/services/cooperado.service';
import { Cooperado } from 'src/app/shared/models/cooperado.model';
import { CpfValidator } from 'src/app/shared/validators/ cpf.validator';

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.scss']
})
export class ConsultaCpfComponent {

  @Output() cooperadoConsultado = new EventEmitter<Cooperado>();
  @Output() consultaFeita = new EventEmitter<boolean>();

  cpfForm: FormGroup;
  cooperado: Cooperado | null = null;
  consultaRealizada: Boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private cooperadoService: CooperadoService,
    private cdr: ChangeDetectorRef
  ) {
    this.cpfForm = this.fb.group({
      cpf: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/), // Validação de máscara
          CpfValidator.validarCpf // Validação de CPF real
        ]
      ]
    });
  }

  consultarCpf(): void {
    if (this.cpfForm.valid) {
      const cpf = this.cpfForm.get('cpf')?.value;
      this.cooperadoService.consultarCooperado(cpf).subscribe(
        (cooperado) => {
          this.cooperado = cooperado;
          this.consultaRealizada = true;
          this.consultaFeita.emit(true); 
          this.cdr.detectChanges();
        }
      );
    }
  }
  
  onCooperadoConsultado(cooperado: Cooperado): void {
    this.cooperado = cooperado;
  }

  resetarFormulario(): void {
    this.cooperado = null; 
    this.cpfForm.reset(); 
    this.consultaRealizada = false;
    this.consultaFeita.emit(false); 
  }
  
}
