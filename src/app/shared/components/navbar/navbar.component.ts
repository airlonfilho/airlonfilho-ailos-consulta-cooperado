import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    { icon: '≡', tooltip: 'Menu' },
    { icon: '🔍', tooltip: 'Buscar' },
    { icon: '★', tooltip: 'Favoritos' },
    { icon: '💬', tooltip: 'Mensagens' },
    { icon: '📊', tooltip: 'Relatórios' },
    { icon: '🏛️', tooltip: 'Instituição' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
