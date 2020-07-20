import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';
import {  UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =
[
  { path: '', redirectTo: '/User', pathMatch: 'full' },
  { path: 'login', component: UserComponent, data: {title: 'Login-Page'}},
  { path: 'Home', component: HomeComponent,
  children: [ { path : 'location', component: LocationComponent}, { path : 'User', component: UserComponent}] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LocationComponent, UserComponent, HomeComponent];
