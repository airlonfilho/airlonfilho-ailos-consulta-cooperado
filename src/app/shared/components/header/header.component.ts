import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'NOVA ADMISSÃO COOPERADO';
  breadcrumbs = ['Cadastro', 'Admissão do Cooperado', 'Nova Admissão de Cooperado'];
  notificationCount = 7;

  constructor() { }

  ngOnInit(): void {
  }

}
