import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { Industry } from 'src/app/services/ferymar/models/industry';
import { RiskLevel } from 'src/app/services/ferymar/models/risk-level';
import { InputComponent } from 'src/app/shared/input/input.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { Stage } from 'src/app/services/ferymar/models/stage';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [FormsModule, RadioButtonModule, DropdownModule, InputComponent, TabViewModule, CommonModule, TableModule, CalendarModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent implements OnInit {
  riskLevel: RiskLevel[] | undefined;
  selectedriskLevel: RiskLevel | undefined;

  industry: Industry[] | undefined;
  selectedindustry: Industry | undefined;
  option: string = 'internalproyect';
  stages: Stage[] = [];
  startDate: Date | undefined;
  endDate: Date | undefined;
  closingDate: Date | undefined;

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.riskLevel = [
      { name: 'Bajo', code: 'B' },
      { name: 'Medio', code: 'M' },
      { name: 'Alto', code: 'A' }
    ];

    this.industry = [
      { name: 'Inmobiliaria', code: 'I' }
    ];

    this.loadEtapasData();
  }

  private loadEtapasData(): void {
    this.stages = [
      {
        etapa: 'Planificación',
        idUnico: 'ETP-001',
        descripcion: 'Elaboración de planos y diseño arquitectónico',
        fechaInicio: '2024-01-15',
        fechaFinal: '2024-02-15',
        fechaFinalizacion: '2024-02-10',
        porcentaje: 100,
        dependencia: '-'
      },
      {
        etapa: 'Excavación',
        idUnico: 'ETP-002',
        descripcion: 'Excavación del terreno y preparación de cimientos',
        fechaInicio: '2024-02-16',
        fechaFinal: '2024-03-30',
        fechaFinalizacion: '',
        porcentaje: 75,
        dependencia: 'ETP-001'
      },
      {
        etapa: 'Estructura',
        idUnico: 'ETP-003',
        descripcion: 'Construcción de la estructura principal',
        fechaInicio: '2024-04-01',
        fechaFinal: '2024-06-30',
        fechaFinalizacion: '',
        porcentaje: 45,
        dependencia: 'ETP-002'
      },
      {
        etapa: 'Albañilería',
        idUnico: 'ETP-004',
        descripcion: 'Levantamiento de muros y tabiques',
        fechaInicio: '2024-05-15',
        fechaFinal: '2024-08-15',
        fechaFinalizacion: '',
        porcentaje: 20,
        dependencia: 'ETP-003'
      },
      {
        etapa: 'Instalaciones',
        idUnico: 'ETP-005',
        descripcion: 'Instalaciones eléctricas, sanitarias y gas',
        fechaInicio: '2024-07-01',
        fechaFinal: '2024-09-30',
        fechaFinalizacion: '',
        porcentaje: 0,
        dependencia: 'ETP-004'
      },
      {
        etapa: 'Acabados',
        idUnico: 'ETP-006',
        descripcion: 'Pintura, pisos y acabados finales',
        fechaInicio: '2024-10-01',
        fechaFinal: '2024-11-30',
        fechaFinalizacion: '',
        porcentaje: 0,
        dependencia: 'ETP-005'
      }
    ];
  }
}
