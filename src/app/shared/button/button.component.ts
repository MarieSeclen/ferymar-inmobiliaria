import { Component, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class ButtonComponent {
  @Input() class: string = '';
  @Input() content: string = '';
  @Input() outlined: boolean = false;
  @Input() disabled: boolean = false;
  @Input() rounded: boolean = true;
  @Input() type: string = 'button';
  @Input() icon?: string;
  @Input() iconPosition: any = 'left';
  @Input() loading: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  @Input() routerLink?: string;
  @Input() severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' | 'contrast';

  onClickButton() {
    this.onClick.emit();
  }
}
