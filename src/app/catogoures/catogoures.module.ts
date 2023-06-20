import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatougresComponent } from './components/catougres/catougres.component';
import { AllComponent } from './components/all/all.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { ProDetailsComponent } from './components/pro-details/pro-details.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
    declarations: [
        CatougresComponent,
        AllComponent,
        ProDetailsComponent,

    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule,
        AppRoutingModule
    ]
})
export class CatogouresModule { }
