import { BrowserModule } from '@angular/platform-browser';
//Importando o MDBootstrap
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { VelhaComponent } from './velha/velha.component';
import { JogadoresComponent } from './jogadores/jogadores.component';


@NgModule({
  declarations: [
    AppComponent,
    VelhaComponent,
    JogadoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
