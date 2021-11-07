import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharDetailComponent } from './components/char/char-detail/char-detail.component';
import { CharListComponent } from './components/char/char-list/char-list.component';
import { EpDetailComponent } from './components/ep/ep-detail/ep-detail.component';
import { EpListComponent } from './components/ep/ep-list/ep-list.component';
import { LocDetailComponent } from './components/loc/loc-detail/loc-detail.component';
import { LocListComponent } from './components/loc/loc-list/loc-list.component';

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
