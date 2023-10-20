import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TankPageComponent } from './tank-page/tank-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'search/:searchTerm',
    component: HomeComponent
  },
  {
    path:'tag/:tag',
    component: HomeComponent
  },
  {
    path:'tank/:id',
    component: TankPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
