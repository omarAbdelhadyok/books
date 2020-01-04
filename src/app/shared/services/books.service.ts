import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { END_POINTS } from './end-points';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../models';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    private url: string = END_POINTS.books;

    constructor(private http: HttpClient) { }

    getBooks(categoryId?: string, search?: string, orderCreated?: string): Observable<Book[]> {
        return this.http.get(this.url, {params: {search, created: orderCreated, categoryId}}).pipe(
            map((books: any) => {
                books.forEach(book => book.image_url = 'http://localhost:3000/' + book.image_url);
                return books;
            })
        );
    }


}
