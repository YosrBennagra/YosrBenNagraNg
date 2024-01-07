import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Atelier2Component } from './atelier2.component';

const routes:Routes=[{path:'',component:Atelier2Component}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Atelier2Module { }
