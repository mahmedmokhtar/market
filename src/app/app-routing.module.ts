import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { CatougresComponent } from './catogoures/components/catougres/catougres.component';
import { AllComponent } from './catogoures/components/all/all.component';
import { ProDetailsComponent } from './catogoures/components/pro-details/pro-details.component';

const routes: Routes = [
  {path:'cart', component:CartComponent},
  {path:'' , component:AllComponent},
  {path:'detail/:id' , component:ProDetailsComponent},
  {path:'**' , redirectTo:'all', pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
