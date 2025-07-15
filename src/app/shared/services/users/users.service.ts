import { Injectable } from '@angular/core';

export interface IEcommerceUser {
  id: number;
  name: string;
  email: string;
  role: 'Customer' | 'Seller' | 'Admin';
  isActive: boolean;
  totalOrders: number;
  totalSpent: number; // in USD
  registeredAt: string; // ISO date
}

export const ECOMMERCE_USERS_MOCK: IEcommerceUser[] = [
  {
    id: 1,
    name: 'Aisha Khan',
    email: 'aisha.khan@example.com',
    role: 'Customer',
    isActive: true,
    totalOrders: 12,
    totalSpent: 348.75,
    registeredAt: '2024-03-10'
  },
  {
    id: 2,
    name: 'Rohit Mehta',
    email: 'rohit.mehta@example.com',
    role: 'Seller',
    isActive: true,
    totalOrders: 450,
    totalSpent: 0,
    registeredAt: '2023-07-18'
  },
  {
    id: 3,
    name: 'Neha Sinha',
    email: 'neha.sinha@example.com',
    role: 'Customer',
    isActive: false,
    totalOrders: 3,
    totalSpent: 99.99,
    registeredAt: '2022-12-25'
  },
  {
    id: 4,
    name: 'Admin Dev',
    email: 'admin@example.com',
    role: 'Admin',
    isActive: true,
    totalOrders: 0,
    totalSpent: 0,
    registeredAt: '2021-05-01'
  },
  {
    id: 5,
    name: 'Priya Agarwal',
    email: 'priya.agarwal@example.com',
    role: 'Seller',
    isActive: true,
    totalOrders: 980,
    totalSpent: 0,
    registeredAt: '2023-01-10'
  },
  {
    id: 6,
    name: 'Karan Patel',
    email: 'karan.patel@example.com',
    role: 'Customer',
    isActive: true,
    totalOrders: 21,
    totalSpent: 654.30,
    registeredAt: '2023-11-04'
  }
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): IEcommerceUser[] {
    return ECOMMERCE_USERS_MOCK;
  }
}
