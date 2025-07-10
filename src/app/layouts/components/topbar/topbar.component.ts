import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MenuModule, ButtonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  constructor(
    public sharedService: SharedService,
  ) {
  }

  ngOnInit() { }
}