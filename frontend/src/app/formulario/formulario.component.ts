import { Component } from '@angular/core';
import { GastoService } from '../services/gasto.service';
import { Gasto } from '../models/Gasto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  ruc: string = '';
  valor: number | null = null;
  tipo: string = 'Ninguno';
  facturas: Gasto[] = [];
 

  constructor(private gastoService: GastoService) {}

  onSubmit() {
    if (this.valor === null || this.valor < 0 || this.tipo === 'Ninguno') {
      alert('El valor ingresado es incorrecto');
      this.valor = null;
      return;
    }

    
  
    

    const factura: Gasto = {
      id: 0,
      tipo: this.tipo,
      ruc: this.ruc,
      valor: this.valor
    };

    this.gastoService.agregarGasto(factura);
    console.log('Factura guardada en JSON:', JSON.stringify(factura));
    this.resetForm();
  }

  private resetForm() {
    this.ruc = '';
    this.valor = null;
    this.tipo = 'Ninguno';
  }
}
