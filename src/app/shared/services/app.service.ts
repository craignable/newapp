import { Injectable } from '@angular/core';
import data from './players.json';

export const directions: any = {
  auto: {
    icon: 'rowfield',
    shading: true,
    position: {
      of: '#grid',
      my: 'right bottom',
      at: 'right bottom',
      offset: '-16 -16',
    },
  },
  up: {
    icon: 'rowfield',
    shading: true,
    direction: 'up',
    position: {
      of: '#grid',
      my: 'right bottom',
      at: 'right bottom',
      offset: '-16 -16',
    },
  },
  down: {
    icon: 'rowfield',
    shading: true,
    direction: 'down',
    position: {
      of: '.dx-datagrid-rowsview',
      my: 'right top',
      at: 'right top',
      offset: '-16 16',
    },
  },
};

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