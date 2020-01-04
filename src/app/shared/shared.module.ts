import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { MaterialImportsModule } from './modules';
import { BindingHelperComponent } from './components/binding-helper/binding-helper.component';
import { BookViewerComponent } from './components/book-viewer/book-viewer.component';

const components = [
    PageTitleComponent,
    BindingHelperComponent,
    BookViewerComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  exports: [...components, MaterialImportsModule]
})
export class SharedModule { }
