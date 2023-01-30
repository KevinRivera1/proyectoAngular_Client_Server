import { UpdateProductDto } from './../../Modules/product.modul';
import { ProductModel } from 'src/app/Modules/product.modul';
import { ProductHttpService } from './../../Services/productHttp.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [];
  selectProduct: UpdateProductDto={};

  page: number = 1;
  constructor(private productHttpService: ProductHttpService) {
    this.initProduct();
   }

  initProduct() {
    this. selectProduct={title:"",price:0,description:""}
   }
  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.updateProduct();
    //this.deleteProduct();
    //this.createProduct()
  }


  getProducts() {
    this.productHttpService.getAll().subscribe((response) => {
      this.products = response;
    });
  }

  getProduct() {
    this.productHttpService.getOne(2).subscribe((response) => {
      console.log(response);
    });
  }
  createProduct() {
    const data = {
      title: 'Creado hola',
      price: 20,
      description: 'Crear saludo',
      categoryId: 1,
      images: ['https://creado'],
    };
    this.productHttpService.store(data).subscribe((response) => {
      console.log(response);
    });
  }

  updateProduct() {
    const data = {
      title: 'actualizado',
      price: 20,
      description: 'Actualizado saludo',
      categoryId: 1,
      images: ['https://actualizado'],
    };
    this.productHttpService.update(data, 2).subscribe((response) => {
      console.log(response);
    });
  }
  
  editProduct(product:ProductModel){
    this.selectProduct=product;
  }

  deleteProduct(id: ProductModel['id']) {
    this.productHttpService.destroy(id).subscribe((response: any) => {
      this.products = this.products.filter(product => product.id != id);
      console.log(response);
    });
  }


}
