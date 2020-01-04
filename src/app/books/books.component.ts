import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-books',
    template: `
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `
})
export class BooksComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
