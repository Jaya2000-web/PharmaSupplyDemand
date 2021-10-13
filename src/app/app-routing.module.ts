import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacysupplyComponent } from './pharmacysupply/pharmacysupply.component';

const routes: Routes = [
  {path:'pharmacysupply', component:PharmacysupplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
