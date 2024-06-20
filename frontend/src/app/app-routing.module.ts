import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteComponent } from './reporte/reporte.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ImpuestoComponent } from './impuesto/impuesto.component';

const routes: Routes = [
  { path: '', redirectTo: '/informacion', pathMatch: 'full' },
  { path: 'informacion', component: InformacionComponent },
  { path: 'registro-facturas', component: FormularioComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'impuesto', component: ImpuestoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  