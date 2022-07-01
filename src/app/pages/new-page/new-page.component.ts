import { Component } from '@angular/core';
import { Customer, Service } from 'src/app/shared/services/app.service';

@Component({
  templateUrl: 'new-page.component.html',
  providers: [Service],
})

export class NewPageComponent {
  customers: Customer[];

  constructor(service: Service) {
    this.customers = service.getCustomers();
  }
}