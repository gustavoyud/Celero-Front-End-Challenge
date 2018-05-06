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
import { BoardComponent } from './velha/board/board.component';
import {InfosService} from './velha/infos.service';
import { CardsComponent } from './jogadores/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    VelhaComponent,
    JogadoresComponent,
    SquareComponent,
    BoardComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [InfosService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
