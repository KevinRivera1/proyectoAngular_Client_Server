import { UpdateProductDto } from './../../Modules/product.modul';
import { ProductModel } from 'src/app/Modules/product.modul';
import { ProductHttpService } from './../../Services/productHttp.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm!: FormGroup;
  products: ProductModel[] = [];
  selectProduct: ProductModel = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    images: [],
    category: {
      id: 0,
      name: 'Electronics',
      image: '',
    },
  };

  page: number = 1;

  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    this.getProducts();
    this.initializeForm();
    this.loadProduct();
  }

  initializeForm(): void {
    this.productForm = new FormGroup({
      titulo: new FormControl(this.selectProduct.title, [Validators.required]),
      categoria: new FormControl(this.selectProduct.category?.name, [Validators.required]),
      precio: new FormControl(this.selectProduct.price, [Validators.required]),
      descripcion: new FormControl(this.selectProduct.description, [Validators.required]),
    });
  }

  loadProduct(): void {
    this.productHttpService.getAll().subscribe((product) => {
      this.selectProduct = product[0];
      this.productForm.patchValue(this.selectProduct);
    });
  }

  getProducts() {
    this.productHttpService.getAll().subscribe((response) => {
      this.products = response;
    });
  }

  createProduct() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      console.log("holas");
    }
  }
  
  updateProduct(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.productHttpService.updateProduct(this.selectProduct.id, formData).subscribe((updatedProduct) => {
        console.log('Producto actualizado:', updatedProduct);
      });
    }
  }

  editProduct(product: ProductModel) {
    this.selectProduct = product;
  }

  deleteProduct(id: ProductModel['id']) {
    this.productHttpService.destroy(id).subscribe((response: any) => {
      this.products = this.products.filter(product => product.id != id);
      console.log(response);
    });
  }

}
