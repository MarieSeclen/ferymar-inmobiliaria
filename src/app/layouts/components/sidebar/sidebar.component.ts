import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { MENU_ITEMS, MenuItem } from '../../../config/menu-config';
import { SharedService } from 'src/app/services/shared.service';
import { AuthService } from 'src/app/services/auth.service';

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
    private activatedRoute: ActivatedRoute,
    private authService: AuthService

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
    const segments = url.split('/').filter(segment => segment.length > 0 && segment !== 'admin');
    if (segments.length > 0) {
      this.activeLink = segments.join('/');

      this.menuItems.forEach(item => {
        if (item.children) {
          const hasActiveChild = item.children.some(child =>
            child.route && url.includes(child.route)
          );
          if (hasActiveChild) {
            item.isExpanded = true;
          }
        }
      });
    }
  }

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  onLogout(): void {
    this.sharedService.hideSideBar();
    this.authService.logout();
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  toggleSubmenu(item: MenuItem): void {
    if (item.children) {
      item.isExpanded = !item.isExpanded;
    }
  }

  isActiveRoute(route?: string): boolean {
    if (!route) return false;
    return this.router.url.includes(route);
  }
}
