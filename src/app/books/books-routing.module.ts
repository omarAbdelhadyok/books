import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './all-books/all-books.component';


const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
        children: [
            {path: '', redirectTo: 'view', pathMatch: 'full'},
            {path: 'view/:id/:catName', component: AllBooksComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
