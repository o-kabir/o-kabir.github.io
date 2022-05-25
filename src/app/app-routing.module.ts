import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
      RouterModule.forRoot([
      
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), //Lazy load account module

      },
      {
        path: '',
        loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule), //Lazy load account module

      },
      {
        path: '',
        loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule), //Lazy load account module

      },
      {
        path: '',
        loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule), //Lazy load account module

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
