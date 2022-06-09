import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
      RouterModule.forRoot([
      
      {
        path: 'home',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), //Lazy load account module

      },
     
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
