import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'home',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
   { path: '**',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)}

  ];

/*   const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      children: [
        { path: 'child1', component: Child1Component },
        { path: 'child2', component: Child2Component },
        { path: '', redirectTo: 'child1', pathMatch: 'full' } // Default route for home component
      ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route for the entire app
    { path: '**', redirectTo: '/home' } // Redirect to home for any other unknown route
  ]; */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
