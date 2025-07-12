import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dimensions',
  standalone: true,
  imports: [TableModule, InputTextModule, CheckboxModule, FormsModule],
  templateUrl: './dimensions.component.html',
  styleUrl: './dimensions.component.scss'
})
export class DimensionsComponent implements OnInit {
  dimensiones: any[] = [];

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.dimensiones = [
      { nombre: 'Dimensión 1', descripcion: 'Sede', activo: false },
      { nombre: 'Dimensión 2', descripcion: 'Proyecto', activo: false },
      { nombre: 'Dimensión 3', descripcion: 'Proceso de Negocio', activo: false },
      { nombre: 'Dimensión 4', descripcion: 'Sub Proceso', activo: false },
      { nombre: 'Dimensión 5', descripcion: 'Centro de Costo', activo: false }
    ];

  }
}