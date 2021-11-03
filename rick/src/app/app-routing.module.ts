import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharDetailComponent } from './char-detail/char-detail.component';
import { CharListComponent } from './char-list/char-list.component';
import { EpDetailComponent } from './ep-detail/ep-detail.component';
import { EpListComponent } from './ep-list/ep-list.component';
import { LocDetailComponent } from './loc-detail/loc-detail.component';
import { LocListComponent } from './loc-list/loc-list.component';

const routes: Routes = [
  { path: '',  component: CharListComponent },
  { path: 'ep',  component: EpListComponent },
  { path: 'loc',  component: LocListComponent },
  { path: 'char/:id', component: CharDetailComponent },
  { path: 'ep/:id',  component: EpDetailComponent },
  { path: 'loc/:id',  component: LocDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
