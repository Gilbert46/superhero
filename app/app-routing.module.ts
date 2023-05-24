import { Component, NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroisComponent } from './herois/herois.component';
import { TaulerComponent } from './tauler/tauler.component';
import { DetallComponent } from './detall/detall.component';

const routes: Routes = [
  { path: '', redirectTo: '/gilbert46.github.io/superhero', pathMatch: 'full'},
  { path: 'gilbert46.github.io/superhero/tauler', component: TaulerComponent },
  { path: 'gilbert46.github.io/superhero/detall/:id', component: DetallComponent },
  { path: 'gilbert46.github.io/superhero/herois', component: HeroisComponent }
];

@NgModule({
  /*declarations: [],
  imports: [
    CommonModule
  ]*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
