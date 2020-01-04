import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() super: string;
  @Input() superLink: string;
  @Input() section: string;
  @Input() sectionLink: string;
  @Input() state: string;
  @Input() buttonText: string;

  @Output() onBtnClick = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToSuper() {
    if(this.superLink) this.router.navigate([`${this.superLink}`]);
  }

  navigateToSection() {
    if(this.sectionLink) this.router.navigate([`${this.sectionLink}`]);
  }

  onLeftBtnClick() {
    this.onBtnClick.emit();
  }

}
