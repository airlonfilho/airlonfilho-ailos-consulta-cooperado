import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  steps = [
    { label: 'Início', active: true, completed: false },
    { label: 'Documentos', active: false, completed: false },
    { label: 'Dados cadastrais', active: false, completed: false },
    { label: 'Admissão', active: false, completed: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
