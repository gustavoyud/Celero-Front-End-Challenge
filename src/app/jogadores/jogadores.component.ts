import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.scss']
})
export class JogadoresComponent implements OnInit {
  //Recebe o nome dos Jogadores
  Jogador1: string = '';
  Jogador2: string = '';

  
  constructor() { }

  ngOnInit() {
  }

}
