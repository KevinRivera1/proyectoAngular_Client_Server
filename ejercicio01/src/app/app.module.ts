import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { StaticModule } from './static/static.module';
import {NgxPaginationModule} from 'ngx-pagination';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { StaicComponent } from './static/staic.component';
import { UserComponent } from './user/user/user.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NotFoundComponent,
    PagesComponent,
    AuthComponent,
    StaicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StaticModule,
    PagesModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
