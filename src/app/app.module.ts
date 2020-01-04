import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './public/main-nav/main-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './public/header/header.component';
import { SecondHeaderComponent } from './public/second-header/second-header.component';
import { LatestBooksComponent } from './public/latest-books/latest-books.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    HeaderComponent,
    SecondHeaderComponent,
    LatestBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
