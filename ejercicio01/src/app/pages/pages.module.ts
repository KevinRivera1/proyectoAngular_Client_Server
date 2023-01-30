import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductComponent } from './product/product.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DashboardComponent, CatalogueComponent, ProductComponent],
  exports: [DashboardComponent, CatalogueComponent, ProductComponent],
  imports: [CommonModule,NgxPaginationModule,RouterModule],
})
export class PagesModule { }
