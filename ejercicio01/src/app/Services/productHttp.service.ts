import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../Modules/product.modul';

@Injectable({
  providedIn: 'root'
})


export class ProductHttpService {
  constructor(private httpClient: HttpClient) { }

  readonly API_URL: string = 'http://api.escuelajs.co/api/v1/products';

  //*Consultar productos
  getAll(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.API_URL);
  }
  //*Consultar productos por ID
  getOne(id: ProductModel['id']): Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ProductModel>(url);
  }
  //*Crear Producto
  store(product: CreateProductDto): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>(this.API_URL, product);
  }
  //*Actualizar Producto
  update(product: UpdateProductDto, id: ProductModel['id']): Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProductModel>(url, product);
  }
  //*Eliminar Producto
  destroy(id: ProductModel['id']): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
      return response.rta;
    })
    );
  }
}