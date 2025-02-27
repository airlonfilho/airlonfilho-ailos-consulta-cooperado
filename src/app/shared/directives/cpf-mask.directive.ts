import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[cpfMask]'
})
export class CpfMaskDirective {
  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    let value = (event.target as HTMLInputElement).value;
    
    value = value.replace(/\D/g, ''); // Remove tudo que não for número

    // Aplica a máscara: 000.000.000-00
    if (value.length > 3) {
      value = value.substring(0, 3) + '.' + value.substring(3);
    }
    if (value.length > 7) {
      value = value.substring(0, 7) + '.' + value.substring(7);
    }
    if (value.length > 11) {
      value = value.substring(0, 11) + '-' + value.substring(11, 13);
    }

    this.ngControl.control?.setValue(value, { emitEvent: false });
  }
}
