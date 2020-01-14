import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'registro-empleados',
  component: RegistroComponent
},
  { path: 'home',
  component: HomeComponent
},
 { path: '',   redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
