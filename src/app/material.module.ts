import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule
} from '@angular/material';


@NgModule({
    exports: [
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule
    ]
})


export class MaterialModule { }
