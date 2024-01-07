import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '', component: HomeComponent, children: 
[
  {path: 'atelier1',loadChildren: () => import('../atelier1/atelier1.module').then(m => m.Atelier1Module)},
  {path: 'atelier2',loadChildren: () => import('../atelier2/atelier2.module').then(m => m.Atelier2Module)},
  {path: 'atelier3',loadChildren: () => import('../atelier3/atelier3.module').then(m => m.Atelier3Module)},
  {path: 'workshop',loadChildren: () => import('../workshops/workshops.module').then(m => m.WorkshopsModule)},

]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
