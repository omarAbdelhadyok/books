import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CategoriesService } from 'src/app/shared/services';
import { Category } from 'src/app/shared/models';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss'],
    animations: [
        trigger('toggleNav', [
            state('void', style({
                'visibility': 'hidden'
            })),
            state('shown', style({
                'visibility': 'visible'
            })),
            transition('void <=> *', [animate('0s ease-in-out')])
        ]),
        trigger('toggleDropdownMenu', [
            state('hidden', style({
                'top': '130%',
                'opacity': '0'
            })),
            state('shown', style({
                'top': '105%',
                'opacity': '1'
            })),
            transition('hidden <=> shown', [animate('0.3s ease-in-out')])
        ])
    ]
})
export class MainNavComponent implements OnInit {

    @ViewChild('nav', { static: true }) nav: ElementRef;

    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        let navTopOffset = this.nav.nativeElement.getBoundingClientRect().top;
        if (navTopOffset < 0) {
            this.navState = 'shown';
        } else {
            this.navState = 'void';
        }
    }

    categories: Category[] = [];

    navState: string = 'void';
    dropdownMenuState: string = 'hidden';


    constructor(private categoriesService: CategoriesService) { }

    ngOnInit() {
        this.checkNavState();
        this.getCategories();
    }

    checkNavState() {
        let navTopOffset = this.nav.nativeElement.getBoundingClientRect().top;
        if(navTopOffset < 0) {
            this.navState = 'shown';
        }
    }

    showDropdownMenu() {
        this.dropdownMenuState = 'shown';
    }

    hideDropdownMenu() {
        this.dropdownMenuState = 'hidden';
    }

    getCategories() {
        this.categoriesService.getCategories().subscribe((data: any) => {
            this.categories = data;
        });
    }

}
