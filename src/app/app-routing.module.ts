import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './layout/auth/auth/pages/login/login.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { UsersComponent } from './layout/pages/users/users.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


