import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'home', component: HomeComponent},
  { path: 'home/:id', component: HomeComponent},
  { path: 'product/:idsp', component: ChitietsanphamComponent},
  { path: 'chitietsanpham', component: ChitietsanphamComponent},
  { path: 'giohang', component: GiohangComponent},
  { path: 'thanhtoan', component: ThanhtoanComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
