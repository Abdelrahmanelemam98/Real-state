import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyHomeComponent } from './share/home/components/property-home/property-home.component';
import { AboutMainComponent } from './about-page/components/about-main/about-main.component';
import { LoginComponent } from './login/Components/login/login.component';
import { RegisterComponent } from './register/components/register/register.component';

const routes: Routes = [
  { path: '', component: PropertyHomeComponent, pathMatch: 'full' },
  { path: 'home', component: PropertyHomeComponent },
  { path: 'about', component: AboutMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
