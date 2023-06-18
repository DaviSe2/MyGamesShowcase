import { Component } from '@angular/core';
import { Jogo } from '../../models/jogo';
import { JogoServiceService } from '../../service/jogo-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jogos! : Jogo[];

  constructor(private jogoService : JogoServiceService) {
    this.getJogos();
  }

  ngOnInit(): void {
  }

  private getJogos(){
    this.jogoService.getJogos().subscribe((resp : Jogo[]) => {
      this.jogos = resp;
    });
  }
}
