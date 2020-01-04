import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models';

@Component({
    selector: 'app-book-viewer',
    templateUrl: './book-viewer.component.html',
    styleUrls: ['./book-viewer.component.scss']
})
export class BookViewerComponent implements OnInit {

    @Input() book: Book;

    panelOpenState: boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
