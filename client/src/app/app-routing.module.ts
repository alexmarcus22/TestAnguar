import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './components/information/information.component';
import { MasinaComponent } from './components/masina/masina.component';
import { PersoanaComponent } from './components/persoana/persoana.component';

const routes: Routes = [
  { path: 'information', component: InformationComponent },
  { path: 'masina', component: MasinaComponent },
  { path: 'persoana', component: PersoanaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
