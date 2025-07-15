import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ICardData {
  title: string,
  data: number,
  isCurrency?: boolean
}

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true
})
export class CardComponent {
  @Input() public cardDetails!: ICardData;
}
