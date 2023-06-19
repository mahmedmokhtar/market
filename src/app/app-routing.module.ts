import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { CatougresComponent } from './catogoures/components/catougres/catougres.component';
import { AllComponent } from './catogoures/components/all/all.component';

const routes: Routes = [
  {path:'cart', component:CartComponent},
  {path:"" , component:CatougresComponent},
  {path:'all' , component:AllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
