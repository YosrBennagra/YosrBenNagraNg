import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { Atelier1Module } from '../atelier1/atelier1.module';
import { Atelier2Module } from '../atelier2/atelier2.module';
import { Atelier3Module } from '../atelier3/atelier3.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Atelier1Module,
    Atelier2Module,
    Atelier3Module
  ]
})
export class HomeModule { }
