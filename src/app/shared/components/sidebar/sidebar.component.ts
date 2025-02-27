import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isOpen = false;
  isChecked = false;

  options = [
    { id:0, name: 'Conheça seu cooperado', value: 'opcao1', checked: false },
    { id:1, name: 'Fale sobre a Cooperativa', value: 'opcao2', checked: false },
    { id:2, name: 'Documentos e comprovações necessárias', value: 'opcao3', checked: false }
  ];

  items = [
    [
      'O que traz você até a Cooperativa?', 
      'O que é mais importante na sua vida?', 
      'Você tem algum sonho?'
    ],
    [
      'Modelo de Negócio: direito a voto, transparência na gestão, PROGRID, retorno das sobras, taxas atrativas;', 
      'Rede de Atendimento: App, Conta Online, SAC, Caixas Eletrônicos (compartilhados entre as Cooperativas), Postos de Atendimento.'
    ],
    [
      'CPF regular na Receita Federal;', 
      'Documento de Identificação (RG, CNH, Carteira de Trabalho, RNM, Carteira Profissional, Passaporte Brasileiro);', 
      'Comprovante de endereço;', 
      'Comprovante de renda.'
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen; 
  }

}
