import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent,data: {title: 'Portfolio'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
