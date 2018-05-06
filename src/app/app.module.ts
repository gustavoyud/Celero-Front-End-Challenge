import { BrowserModule } from '@angular/platform-browser';
//Importando o MDBootstrap
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { VelhaComponent } from './velha/velha.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { SquareComponent } from './velha/square/square.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    VelhaComponent,
    JogadoresComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
