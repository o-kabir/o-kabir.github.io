import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [HomeComponent,AboutUsComponent,PortfolioComponent,ContactUsComponent],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent,AboutUsComponent,PortfolioComponent,ContactUsComponent]
})
export class ModulesModule { }
