import { Component, OnInit } from '@angular/core';
import { IEcommerceUser, UsersService } from '../shared/services/users/users.service';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, of, Subject, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
@Component({
  selector: 'app-users',
  imports: [MatTableModule, CommonModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  standalone: true
})
export class UsersComponent implements OnInit {
  public users!: IEcommerceUser[];
  public displayedColumns: string[] = ['id', 'name', 'email', 'role', 'isActive', 'totalOrders', 'totalSpent', 'registeredAt'];
  public searchText: string = '';
  private searchSubject: Subject<string> = new Subject<string>();
  public filteredUsers!: IEcommerceUser[];

  constructor(private userService: UsersService,
    private matDialog: MatDialog
  ) {
    this.searchSubject.pipe(debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchText: string) => {
        const searchResult: IEcommerceUser[] = this.users.filter((user: IEcommerceUser) => user.role.toLowerCase().includes(searchText.toLowerCase()));
        return of(searchResult);
      })
    ).subscribe((result: IEcommerceUser[]) => {
      this.filteredUsers = result;
    })

  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users;
  }

  public search(event: string): void {
    this.searchText = event;
    this.searchSubject.next(this.searchText);
  }

  public addUser() {
    let instance = this.matDialog.open(AddUserComponent);
    let date = new Date();
    instance.afterClosed().subscribe((value) => {
      if (value) {
        this.users.push({
          ...value, id: Math.random().toString(16).slice(2), registeredAt: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
        });
        this.filteredUsers = [...this.users];
      }
    })

  }

}
