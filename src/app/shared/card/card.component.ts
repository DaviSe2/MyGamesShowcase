import { Component, Input } from '@angular/core';
import { Jogo } from '../../models/jogo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() jogo! : Jogo

  constructor() { }

  ngOnInit(): void {
  }
}
