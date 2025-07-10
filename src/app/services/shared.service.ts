import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay, of } from 'rxjs';
import { MessageService } from 'primeng/api';

type ToastSeverity = 'success' | 'error' | 'warn' | 'info';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sidebar = new BehaviorSubject<boolean>(false);
  private loading = new BehaviorSubject<boolean>(false);
  
  public sidebar$ = this.sidebar.asObservable();
  public loading$ = this.loading.asObservable();

  constructor(private messageService: MessageService) { }

  public showSideBar() {
    this.sidebar.next(true);
  }

  public hideSideBar() {
    this.sidebar.next(false);
  }

  public showLoading(): void {
    this.loading.next(true);
  }

  public hideLoading(): void {
    const minLoadingTime = of(null).pipe(delay(500));
    minLoadingTime.subscribe(() => {
      this.loading.next(false);
    });
  }

  public showToast(message: string, severity: ToastSeverity, title?: string): void {
    const titles: Record<ToastSeverity, string> = {
      success: 'Éxito',
      error: 'Error',
      warn: 'Advertencia',
      info: 'Información'
    };

    this.messageService.add({
      key: 'main',
      severity,
      summary: title || titles[severity],
      detail: message,
      life: 3000
    });
  }
}
