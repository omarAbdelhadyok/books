import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    books:any = [];

    constructor(private booksService: BooksService) { }

    ngOnInit() {
        // this.booksService.getBooks().subscribe(data => {
        //     this.books = data;
        // })
    }

}
