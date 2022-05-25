import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  
  { path: '', resolve: { login: HomeComponent }, redirectTo: 'home' },

  {
    path: 'home',
    component: HomeComponent,data: {title: 'Home'},
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
