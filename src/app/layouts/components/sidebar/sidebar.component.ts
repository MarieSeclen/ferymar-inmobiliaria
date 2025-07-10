import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { MENU_ITEMS, MenuItem } from '../../../config/menu-config';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  visibleSidebar: boolean = false;
  activeLink: string = '';
  menuItems: MenuItem[] = [];

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  constructor(
    public sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.sharedService.sidebar$.subscribe(v => {
      this.visibleSidebar = v
    })
  }

  ngOnInit(): void {

    this.loadMenuItems();

    this.updateActiveLinkFromUrl(this.router.url);

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateActiveLinkFromUrl(event.url);
    });
  }

   private loadMenuItems(): void {
    this.menuItems = MENU_ITEMS;
    
  }

  updateActiveLinkFromUrl(url: string): void {
    const mainSegment = url.split('/').filter(segment => segment.length > 0 && segment !== 'admin')[0];
    if (mainSegment) {
      this.activeLink = mainSegment;
    }
  }

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  onLogout(): void {
    this.sharedService.hideSideBar();
    this.router.navigate(['/auth/login'])
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
