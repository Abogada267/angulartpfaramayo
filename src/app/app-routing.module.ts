import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { HomeComponent } from '../app/layout/pages/home/home.component';
import { UsersComponent } from '../app/layout/pages/users/users.component';
import { AlumnosDetailComponent } from './alumnos-detail/alumnos-detail.component';
import { AlumnosComponent } from './alumnos/alumnos.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AlumnosDetailComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
