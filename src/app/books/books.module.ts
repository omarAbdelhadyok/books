import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BooksComponent, AllBooksComponent],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule,
  ]
})
export class BooksModule { }
