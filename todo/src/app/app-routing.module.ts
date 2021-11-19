import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './components/stats/stats.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';


const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'users', component: UsersComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'task/:id', component: TaskDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }