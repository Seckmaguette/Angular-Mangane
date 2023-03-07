import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "users-list", component: UsersListComponent},
  {path: "login", component: LoginComponent},
  {path: "**", redirectTo: "/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
