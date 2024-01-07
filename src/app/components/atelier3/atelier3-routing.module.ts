import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInvoiceComponent } from '../main-invoice/main-invoice.component';
import { InvoiceComponent } from '../invoice/invoice.component';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';

const routes: Routes = [
  { path: 'invoice-management', component: MainInvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },  
  { path: '**', redirectTo: 'invoice-management' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Atelier3RoutingModule { }
