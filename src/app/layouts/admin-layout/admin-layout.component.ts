import { Component } from '@angular/core';
import { SidebarComponent } from '@layouts/components/sidebar/sidebar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../components/topbar/topbar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, RouterOutlet, RouterLink],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
