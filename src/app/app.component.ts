import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { Analytics, AnalyticsRoute, Dashboard, DashboardRoute, Products, ProductsRoute, Settings, SettingsRoute, Users, UsersRoute } from './shared/constants/menu.constant';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface IMenuItem {
  name: string,
  path: string,
  icon: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatListModule, CommonModule, RouterModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {

  constructor(private router: Router) {

  }

  public menuItems: IMenuItem[] = [
    { name: Dashboard, path: DashboardRoute, icon: 'person' },
    { name: Users, path: UsersRoute, icon: 'people' },
    { name: Products, path: ProductsRoute, icon: 'local_grocery_store' },
    { name: Analytics, path: AnalyticsRoute, icon: 'bar_chart' },
    { name: Settings, path: SettingsRoute, icon: 'settings' }
  ]

  public showPage(item: IMenuItem): void {
    const url: string = '/' + item.path;
    this.router.navigate([url]);
  }
}

