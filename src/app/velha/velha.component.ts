import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-velha',
  templateUrl: './velha.component.html',
  styleUrls: ['./velha.component.scss']
})
export class VelhaComponent implements OnInit {
  //Recebe Os Jogadores em ordem
  public Player1: string;
  public Player2: string;

  public Status: string;
  //Contador de Pontos
  public P1: number = 0;
  public P2: number = 0;
  //Boolean responsável por animações
  public Anima: boolean = false;

  //Bolean responsável por reiniciar o Jogo
  public Reinicia: boolean = false;

  //Recebe array de outro component
  @Input() Jogadores: string[];

  //Recebe o Jogador que inicia do componente filho
  @Input() Joga: Number; 

  //Controla de qual jogador é a Jogada
  public Jogada: Number = 1;

  //Cria array de controle das jogadas por usuario
  public Player: Number[][] = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

  //Cria uma Matriz de Bool para controle das casas clicadas
  public MatrizP: boolean[][] = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
  ];

  //Seta o valor passado como verdade na Matriz de Bools
  public setTrue(Linha: number, Coluna: number)
  {
    
    //Se a matriz Já não estiver alocada
    if(this.MatrizP[Linha][Coluna] == false)
    {
      this.MatrizP[Linha][Coluna] = true;
      //Aloca a jogada na matriz de jogadores 
      if(this.Player[Linha][Coluna] == 0)
        this.Player[Linha][Coluna] = this.Jogada;

      this.VerificaCasas(Linha,Coluna,this.Jogada);
      //Troca o turno
      this.ChangesTurn();
    }
  }

  //Método responsável pela lógica do jogo
  private VerificaCasas(Linha: number, Coluna: number, Jogador: Number)
  {
    //Define as variaveis para controle
    let velha = 0;
    let p = 0;
    let s = 0;
    let t = 0;
    let p1 = 0;
    let s1 = 0;
    let t1 = 0;
    let d = 0;
    let d2 = 0;

    //Verifica se 'deu velha'
    for(let i = 0; i < 3; i++)
      for(let j = 0; j < 3; j++)  
        if(this.Player[i][j] > 0)
          velha++;

    //Realiza a verificação vertical
    for(let i = 0; i < 3; i++)
    {
      if(this.Player[i][0] == Jogador)
        p++;
      else if(this.Player[i][1] == Jogador)
        s++;
      else if(this.Player[i][2] == Jogador)
        t++;
    }

    //Realiza a verificação vertical
    for(let i = 0; i < 3; i++)
    {
      if(this.Player[0][i] == Jogador)
        p1++;
      else if(this.Player[1][i] == Jogador)
        s1++;
      else if(this.Player[2][i] == Jogador)
        t1++;
    }

    //Variavel auxiliar
    let dv = 2;
    //Realiza a verificação Diagonal    
    for (let i = 0; i <3; i++)
    {
      if(this.Player[i][i] == Jogador)
        d++;
      
      if(this.Player[dv][i] == Jogador)
        d2++;
        
      dv--;
    }

    //Se algum dos valores tiver marcado 3 casas o jogo termina
    if(p == 3 || s == 3 || t == 3 || p1 == 3 || s1 == 3 || t1 == 3 || d == 3 || d2 == 3)
      this.Termina(Jogador,false);
    else if(velha == 9)
      this.Termina(Jogador,true);

  }

  public Termina(Jogador: Number,Velha: boolean)
  {
    this.Reinicia = true;

    //Zera as matrizes de boolean
    for(let i = 0; i < 3; i ++)
    {
      for(let j = 0; j < 3; j++)
      {
        if(this.MatrizP[i][j] == true)
          this.MatrizP[i][j] = false;
        
        if(this.Player[i][j] > 0)
          this.Player[i][j] = 0;
      }
    }
     
    
    if(Jogador == 1 && Velha == false)
    {
      this.P1++;
      this.Status = this.Player1+" venceu a rodada!";
    }
    else if(Jogador == 2 && Velha == false)
    {
      this.P2++;
      this.Status = this.Player2+" venceu a rodada!";
    }
    else if(Velha)
      this.Status = "O Jogo deu velha";
  }
  //Muda o Turno dos jogadores
  public ChangesTurn()
  {
    if(this.Jogada == 1)
      this.Jogada = 2;
    else
      this.Jogada = 1;
  }


  ngOnInit() {
    //Ordena os Jogadores
    if(this.Joga == 1)
    {
      this.Player1 = this.Jogadores[0];
      this.Player2 = this.Jogadores[1];
    }
    else
    {
      this.Player1 = this.Jogadores[1];
      this.Player2 = this.Jogadores[0];
    }
  }

}