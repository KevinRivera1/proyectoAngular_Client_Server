
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { StaticModule } from '../static/static.module';
import { FormComponent } from './product/form/form.component';


const routes: Routes = [
  //*Rutas hijas
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent},
      { path: 'catalogue', component: CatalogueComponent },
      { path: 'form', component: FormComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, StaticModule,RouterModule.forChild(routes)],
})
export class PagesRoutingModule { }
