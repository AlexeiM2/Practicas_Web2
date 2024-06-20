import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ImpuestoComponent } from './impuesto/impuesto.component';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { GastoService } from './services/gasto.service';
import { DataService } from './services/data.service';
imports: [HttpClientModule]
providers: [GastoService]
providers: [DataService]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InformacionComponent,
    FormularioComponent,
    ReporteComponent,
    ImpuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    GastoService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
