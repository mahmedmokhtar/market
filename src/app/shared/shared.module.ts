import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './components/select/select.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    LoadingComponent,
    CardComponent,

  ],
  imports: [CommonModule, RouterModule, FormsModule, AppRoutingModule,ReactiveFormsModule],
  exports: [HeaderComponent, SelectComponent, LoadingComponent, CardComponent,ReactiveFormsModule],
})
export class SharedModule {}
