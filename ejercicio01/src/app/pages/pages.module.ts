import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [DashboardComponent, CatalogueComponent, ProductComponent],
  exports: [DashboardComponent, CatalogueComponent, ProductComponent],
  imports: [CommonModule,NgxPaginationModule,RouterModule,ReactiveFormsModule],
})
export class PagesModule { }
