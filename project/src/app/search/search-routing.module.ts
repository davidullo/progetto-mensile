import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: ':city', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
