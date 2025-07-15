import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CardComponent, ICardData } from '../shared/component/card/card.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  imports: [MatSidenavModule, CardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true
})
export class DashboardComponent {
  public cards: ICardData[] = [
    { title: 'Total Users', data: 1234 },
    { title: 'Total Products', data: 3454 },
    { title: 'Revenue', data: 12345, isCurrency: true },
    { title: 'New Orders', data: 84 }
  ]

}
