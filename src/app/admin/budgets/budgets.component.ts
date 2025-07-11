import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { Distribution } from 'src/app/services/ferymar/models/distribution';
import { DistributionMethod } from 'src/app/services/ferymar/models/distribution-method';
import { InputComponent } from 'src/app/shared/input/input.component';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [FormsModule, RadioButtonModule, DropdownModule, InputComponent, TabViewModule, CommonModule, TableModule, CalendarModule],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.scss'
})
export class BudgetsComponent {
  distributionMethod: DistributionMethod[] | undefined;
  selectedDistributionMethod: DistributionMethod | undefined;

  option: string[] = [];
  distribution: Distribution[] = [];
  startDate: Date | undefined;
  endDate: Date | undefined;

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.distributionMethod = [
      { name: 'Igual a', code: 'I' },
      { name: 'Orden ascendente', code: 'O' },
      { name: 'Series descendentes', code: 'S' }
    ];


    this.loadDistributionData();
  }

  private loadDistributionData(): void {
    this.distribution = [
      {
        nombrePresupuesto: 'Materiales de Construcción',
        porcentajeInicial: 35,
        metodoRedondeo: 'Igual a',
        centroCosto1: '125,000',
        centroCosto2: '89,500',
        centroCosto3: '156,750',
        centroCosto4: '78,250',
        proyecto: 'Edificio Residencial Los Pinos'
      },
      {
        nombrePresupuesto: 'Mano de Obra',
        porcentajeInicial: 28,
        metodoRedondeo: 'Orden ascendente',
        centroCosto1: '95,000',
        centroCosto2: '110,000',
        centroCosto3: '125,000',
        centroCosto4: '140,000',
        proyecto: 'Edificio Residencial Los Pinos'
      },
      {
        nombrePresupuesto: 'Acabados Premium',
        porcentajeInicial: 15,
        metodoRedondeo: 'Series descendentes',
        centroCosto1: '85,000',
        centroCosto2: '68,000',
        centroCosto3: '51,000',
        centroCosto4: '34,000',
        proyecto: 'Torre Empresarial Centro'
      },
      {
        nombrePresupuesto: 'Instalaciones Eléctricas',
        porcentajeInicial: 12,
        metodoRedondeo: 'Igual a',
        centroCosto1: '45,500',
        centroCosto2: '45,500',
        centroCosto3: '45,500',
        centroCosto4: '45,500',
        proyecto: 'Conjunto Habitacional Valle Verde'
      }
    ];
  }
}
