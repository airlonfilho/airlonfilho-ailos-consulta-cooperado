import { Component, ViewChild } from '@angular/core';
import { ConsultaCpfComponent } from './pages/consulta-cpf/consulta-cpf.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ailos-consulta-cooperado';
  
  @ViewChild(ConsultaCpfComponent) consultaCpfComponent!: ConsultaCpfComponent;

  consultaRealizada = false;
  isConsultaCpf: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isConsultaCpf = this.router.url === '/consulta-cpf';
      }
    });
  }

  atualizarEstadoConsulta(consultaFeita: boolean) {
    this.consultaRealizada = consultaFeita;
  }

  resetarConsulta() {
    this.consultaRealizada = false;
    this.consultaCpfComponent.resetarFormulario();
  }
}
