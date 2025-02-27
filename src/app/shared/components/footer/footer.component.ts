import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cooperado } from '../../models/cooperado.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() exibirNovaAdmissao = false;
  @Output() novaAdmissao = new EventEmitter<void>();
  @Output() abrirSidebar = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
