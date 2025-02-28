import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    { icon: 'fa-solid fa-bars', tooltip: 'Menu' },
    { icon: 'fa-solid fa-magnifying-glass', tooltip: 'Buscar' },
    { icon: 'fa-solid fa-star', tooltip: 'Favoritos' },
    { icon: 'fa-solid fa-comment', tooltip: 'Mensagens' },
    { icon: 'fa-solid fa-chart-simple', tooltip: 'Relatórios' },
    { icon: 'fa-solid fa-building-columns', tooltip: 'Instituição' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
