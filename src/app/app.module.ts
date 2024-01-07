import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './components/list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './components/list-produits/list-produits.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { Atelier1Component } from './components/atelier1/atelier1.component';
import { Atelier2Component } from './components/atelier2/atelier2.component';
import { Atelier3Component } from './components/atelier3/atelier3.component';
import { MainInvoiceComponent } from './components/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

import { ProduitService } from './services/produit.service';
import { ListUserComponent } from './components/list-user/list-user.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';


@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    ListProduitsComponent,
    HeaderComponent,
    HomeComponent,
    Atelier1Component,
    Atelier2Component,
    Atelier3Component,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    ListUserComponent,
    WorkshopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
