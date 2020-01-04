import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { END_POINTS } from './end-points';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    private apiUrl: string = END_POINTS.categories

    constructor(private http: HttpClient){}

    getCategories() {
        return this.http.get(this.apiUrl);
    }

}