export interface MenuItem {
  id: string;
  label: string;
  route: string;
  icon: string;
  roles: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'proyectos',
    label: 'Proyectos',
    route: 'proyectos',
    icon: 'pi pi-building',
    roles: ['ADMIN']
  },
  {
    id: 'presupuestos',
    label: 'Presupuestos',
    route: 'presupuestos',
    icon: 'pi pi-calculator',
    roles: ['ADMIN']
  },
  {
    id: 'centro-costos',
    label: 'Centro de Costos',
    route: 'centro-costos',
    icon: 'pi pi-chart-pie',
    roles: ['ADMIN']
  }
]; 