import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopsComponent } from './workshops.component';
import { ListUserModule } from '../list-user/list-user.module';


const routes:Routes=[{path:'',component:WorkshopsComponent}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ListUserModule
  ]
})
export class WorkshopsModule { }
