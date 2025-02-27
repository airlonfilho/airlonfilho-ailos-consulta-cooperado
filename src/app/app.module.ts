import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaCpfComponent } from './pages/consulta-cpf/consulta-cpf.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StepperComponent } from './shared/components/stepper/stepper.component';
import { CpfMaskDirective } from './shared/directives/cpf-mask.directive';
import { CardComponent } from './shared/components/card/card.component';
import { ErrorComponent } from './shared/components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaCpfComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    StepperComponent,
    CpfMaskDirective,
    CardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
