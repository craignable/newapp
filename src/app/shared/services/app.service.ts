import { Injectable } from '@angular/core';
import data from './players.json';

export class Customer {
  ID!: number;

  Name!: string;

  Age!: number;

  Titles!: number;

  Slams!: number;
}

const customers: Customer[] = data;

@Injectable()
export class Service {
  getCustomers() {
    return customers;
  }
}