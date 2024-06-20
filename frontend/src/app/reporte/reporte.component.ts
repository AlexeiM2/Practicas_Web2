import { Component, OnInit } from '@angular/core';
import { GastoService } from '../services/gasto.service';
import { DataService } from '../services/data.service'; 
import { Gasto } from '../models/Gasto';
import { User } from '../models/User'; 

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  gastos: Gasto[] = [];
  usuarios: User[] = [];

  constructor(
    private gastoService: GastoService,
    private dataService: DataService 
  ) {}

  ngOnInit(): void {
    this.cargarGastos(); 
  }

  cargarGastos(): void {
    this.gastoService.obtenerDatos().subscribe(data => {
      this.gastos = data;
      this.usuarios = []; 
    });
  }

  cargarUsuarios(): void {
    this.dataService.obtenerDatos().subscribe(data => {
      this.usuarios = data;
      this.gastos = []; 
    });
  }
}
