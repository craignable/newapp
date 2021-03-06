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

// const customers: Customer[] = [{
//   ID: 1,
//   Name: 'Roger Federer',
//   Age: 40,
//   Titles: 103,
//   Slams: 20,
// }, {
//   ID: 2,
//   Name: 'Rafael Nadal',
//   Age: 36,
//   Titles: 92,
//   Slams: 22,
// }, {
//     ID: 3,
//     Name: 'Serena Williams',
//     Age: 40,
//     Titles: 73,
//     Slams: 23,
// }, {
//     ID: 4,
//     Name: 'Novak Djokovic',
//     Age: 35,
//     Titles: 87,
//     Slams: 20,
// }, {
//     ID: 5,
//     Name: 'Steffi Graff',
//     Age: 53,
//     Titles: 107,
//     Slams: 22,
//   }, {
//       ID: 6,
//       Name: 'Pete Sampras',
//       Age: 50,
//       Titles: 64,
//       Slams: 14,
//   }, {
//       ID: 7,
//       Name: 'Andre Agassi',
//       Age: 52,
//       Titles: 60,
//       Slams: 8,
//   }, {
//     ID: 8,
//     Name: 'Venus Williams',
//     Age: 42,
//     Titles: 49,
//     Slams: 7,
//   }, {
//       ID: 9,
//       Name: 'Jimmy Connors',
//       Age: 69,
//       Titles: 109,
//       Slams: 8,
//   }, {
//       ID: 10,
//       Name: 'Maria Sharapova',
//       Age: 35,
//       Titles: 36,
//       Slams: 5,
//   }, {
//     ID: 11,
//     Name: 'Bjorn Borg',
//     Age: 66,
//     Titles: 66,
//     Slams: 11,
//   }, {
//       ID: 12,
//       Name: 'Martina Hingis',
//       Age: 41,
//       Titles: 43,
//       Slams: 5,
//   }];

@Injectable()
export class Service {
  getCustomers() {
    return customers;
  }
}