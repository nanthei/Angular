import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharDetailComponent } from './char-detail/char-detail.component';
import { CharListComponent } from './char-list/char-list.component';

const routes: Routes = [
  { path: '',  component: CharListComponent },
  { path: 'char/:id', component: CharDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
