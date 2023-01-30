import { CategoryService } from './modules-sv/services/category.service';
import { ProductService } from './modules-sv/services/products/product.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    CategoryService,
    ProductService, AppService],
})
export class AppModule { }
