import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CpfValidator {
  static validarCpf(control: AbstractControl): ValidationErrors | null {
    const cpf = control.value ? control.value.replace(/\D/g, '') : '';

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return { cpfInvalido: true };
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito verificador
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return { cpfInvalido: true };

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return { cpfInvalido: true };

    return null; // CPF válido
  }
}
