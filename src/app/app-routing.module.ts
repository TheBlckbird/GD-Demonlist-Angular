import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BirthdayComponent} from "./birthday/birthday.component";
import {AnotherComponent} from "./another/another.component";
import {DemonListComponent} from "./demonlist/demon-list.component";

const routes: Routes = [
//  { path: 'birthday', component: BirthdayComponent },
//  { path: 'another', component: AnotherComponent },
  { path: 'demonlist', component: DemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
