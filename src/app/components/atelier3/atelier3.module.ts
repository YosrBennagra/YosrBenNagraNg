import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Atelier3RoutingModule } from './atelier3-routing.module';
import { Atelier3Component } from './atelier3.component';

const routes:Routes=[{path:'',component:Atelier3Component}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Atelier3RoutingModule,
    RouterModule.forChild(routes),
  ]
})
export class Atelier3Module { }
