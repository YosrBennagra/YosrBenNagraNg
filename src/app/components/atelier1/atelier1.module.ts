import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Atelier1Component } from './atelier1.component';

const routes:Routes=[{path:'',component:Atelier1Component}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Atelier1Module { }
