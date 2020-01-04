import { NgModule } from "@angular/core";
import {
    MatCardModule, MatExpansionModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatDividerModule, MatProgressSpinnerModule,
} from '@angular/material';

const modules = [
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
]

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class MaterialImportsModule {}