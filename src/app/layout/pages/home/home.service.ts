import { Injectable } from '@angular/core';
import { delay, finalize, of } from 'rxjs';
import { Product } from '../../pages/';
import { Home } from '../home/home.component';

let home: Home [] = [
  {
    id: 1,
    name: 'Malvina',
    createdAt: new Date(),
    actions: 'nuevo',
  },
  {
    id: 2,
    name: 'Graciela',
    createdAt: new Date(),
    actions: 'nuevoo',
  },
  {
    id: 3,
    name: 'Auricular ',
    createdAt: new Date(),
    actions: 'nuevooo',
  },
];

@Injectable()
export class ProductsService {
  [x: string]: any;
  constructor(private loadingService: LoadingService) {}

  getHome() {
    this.loadingService.setIsLoading(true);
    return of(home).pipe(
      delay(1500),
      finalize(() => this.loadingService.setIsLoading(false))
    );
  }

  createProduct(data: Home) {
    Product = [...Product, { ...data, id: Product.length + 1 }];
    return this['getProducts']();
  }

  deleteProductById(id: number) {
    Product = Product.filter((el) => el.id != id);
    return this['getProducts']();
  }

  updateProductById(id: number, data: Product) {
    Product = Product.map((el) => (el.id === id ? { ...el, ...data } : el));
    return this['getProducts']();
  }
}