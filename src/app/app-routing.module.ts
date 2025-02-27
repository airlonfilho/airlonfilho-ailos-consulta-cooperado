import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCpfComponent } from './pages/consulta-cpf/consulta-cpf.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'consulta-cpf', pathMatch: 'full' },
  { path: 'consulta-cpf', component: ConsultaCpfComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
