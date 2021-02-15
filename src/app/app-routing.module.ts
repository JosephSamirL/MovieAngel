import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component"
import {MovieComponent} from "./movie/movie.component"
const routes: Routes = [
  {path:"", component: SearchComponent},
  {path:"movies/:id", component: MovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
