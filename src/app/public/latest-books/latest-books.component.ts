import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { Book } from 'src/app/shared/models';

@Component({
    selector: 'app-latest-books',
    templateUrl: './latest-books.component.html',
    styleUrls: ['./latest-books.component.scss']
})
export class LatestBooksComponent implements OnInit {

    latestBooks: Book[] = [];
    loading: boolean = false;
    noData: boolean = false;

    constructor(private booksService: BooksService) { }

    ngOnInit() {
        this.getLatestBooks();
    }

    getLatestBooks() {
        this.booksService.getBooks(undefined, undefined, 'true').subscribe(books => {
            this.loading = true;
            if (books.length > 0) {
                this.latestBooks = books;
                this.noData = false;
            } else {
                this.noData = true;
            }
            this.loading = false;
        }, error => {
            this.loading = false;
            this.noData = false;
        })
    }

}
