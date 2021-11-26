import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pag/inicio/inicio.component';

const routes: Routes = [
  { path:'', component: InicioComponent, pathMatch:'full' },
  { path: 'inicial', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
