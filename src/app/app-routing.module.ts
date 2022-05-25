import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
      RouterModule.forRoot([
      
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), //Lazy load account module

      },
     
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
