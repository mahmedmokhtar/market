import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatougresComponent } from './components/catougres/catougres.component';
import { AllComponent } from './components/all/all.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        CatougresComponent,
        AllComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class CatogouresModule { }
