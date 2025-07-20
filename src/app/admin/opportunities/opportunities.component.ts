import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { Industry } from 'src/app/services/ferymar/models/industry';
import { InputComponent } from 'src/app/shared/input/input.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { StageOpportunities } from 'src/app/services/ferymar/models/stageOpportunities';

@Component({
  selector: 'app-opportunities',
  standalone: true,
  imports: [FormsModule, RadioButtonModule, DropdownModule, InputComponent, TabViewModule, CommonModule, ReactiveFormsModule,
    TableModule, CalendarModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, InputTextareaModule,
    FloatLabelModule],
  templateUrl: './opportunities.component.html',
  styleUrl: './opportunities.component.scss'
})
export class OpportunitiesComponent implements OnInit {
  startDate: Date | undefined;
  closingDate: Date | undefined;
  stagesOpportunities: StageOpportunities[] = [];
  industry: Industry[] | undefined;
  selectedindustry: Industry | undefined;
  informationSource: any[] = [];
  selectedinformationSource: any | undefined;
  seasonality: any[] = [];
  selectedseasonality: any | undefined;
  comments!: string;
  expectedClosingDate: Date | undefined;
  interestLevel: any[] = [];
  selectedInterestLevel: any | undefined;


  ngOnInit(): void {
    this.industry = [
      { name: 'Industria', code: 'I' },
      { name: 'Inmobiliaria', code: 'II' },
    ];

    this.informationSource = [
      { name: 'Volante', code: 'F1' },
      { name: 'Redes Sociales', code: 'F2' },
      { name: 'Panel publicitario', code: 'F3' },
      { name: 'TV', code: 'F4' },
      { name: 'Radio', code: 'F5' },
    ];
    this.seasonality = [
      { name: 'Dias', code: 'D' },
      { name: 'Semanas', code: 'S' },
      { name: 'Meses', code: 'M' },
    ];

    this.interestLevel = [
      { name: 'Muy Alto', code: 'MA' },
      { name: 'Alto', code: 'A' },
      { name: 'Medio', code: 'M' },
      { name: 'Bajo', code: 'B' }
    ];
    this.loadEtapasOportunidadesData();
  }

  loadEtapasOportunidadesData(): void {
    this.stagesOpportunities = [
      {
        fechaInicio: this.formatDateTime(new Date()),
        fechaCierre: this.formatDateTime(new Date()),
        empleadoVentas: 'Juan Pérez',
        etapa: 'Prospección',
        porcentaje: 30,
        montoPotencial: 10000,
        importePonderado: 3000,
        claseDocumento: 'Factura',
        numeroDocumento: 'F001'
      },
      {
        fechaInicio: this.formatDateTime(new Date()),
        fechaCierre: this.formatDateTime(new Date()),
        empleadoVentas: 'María López',
        etapa: 'Negociación',
        porcentaje: 50,
        montoPotencial: 20000,
        importePonderado: 10000,
        claseDocumento: 'Factura',
        numeroDocumento: 'F002'
      }
    ]
  }
  
  private formatDateTime(date: Date): string {
    return date.toLocaleString('es-PE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

}
