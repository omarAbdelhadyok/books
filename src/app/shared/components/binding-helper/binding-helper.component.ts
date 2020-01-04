import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-binding-helper',
    templateUrl: './binding-helper.component.html',
    styleUrls: ['./binding-helper.component.scss']
})
export class BindingHelperComponent implements OnInit {

    @Input() isNoData: boolean = false;
    @Input() noDataMsg: string = 'لا يوجد بيانات';
    @Input() isError: boolean = false;
    @Input() errorMsg: string = 'حدث خطأ ما يرجى إعادة التحميل';
    @Input() isLoading: boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
