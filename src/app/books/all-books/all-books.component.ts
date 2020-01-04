import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/shared/services';
import { Book } from 'src/app/shared/models';

@Component({
    selector: 'app-all-books',
    templateUrl: './all-books.component.html',
    styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
    

    books: Book[] = [];
    noData: boolean = false;
    loading: boolean = false;

    pageTitle: string = 'الكل';

    constructor(private route: ActivatedRoute,
        private booksService: BooksService) { }

    ngOnInit() {
        this.route.params.subscribe(data => {
            this.pageTitle = data.catName;
            this.getBookForCategory(data.id);
        })
    }

    getBookForCategory(id: string) {
        this.reset();
        this.loading = true;
        this.booksService.getBooks(id).subscribe(data => {
            if(data.length > 0) {
                this.books = data;
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

    reset() {
        this.books = [];
        this.noData = false;
        this.loading = false;
    }

}
