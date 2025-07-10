import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, Optional, Output,EventEmitter } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {
  private _value: string = '';
  onChange: any = () => { };
  onTouched: any = () => { };
  @Input() type: string = "text"
  @Input() placeholder?: string
  @Input() label?: string
  @Input() hint?: string
  @Input() startIcon?: string;
  @Input() endIcon?: string;
  @Input() formControlName?: string;
  @Input() name?: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() minLength?: number;
  @Input() error?: string;

  @Input()
  set value(val: string) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(val);
      this.valueChange.emit(val);
    }
  }

  get value(): string {
    return this._value;
  }

  @Output() endIconClick = new EventEmitter<void>();
  @Output() valueChange = new EventEmitter<string>();

  constructor(@Optional() public controlContainer: ControlContainer) {
  }

  get control() {
    if (this.formControlName && this.controlContainer) {
      return this.controlContainer.control?.get(this.formControlName);
    } else {
      return undefined;
    }
  }

  handleEndIconClick(): void {
    this.endIconClick.emit();
  }

  setValue(event: any) {
    const newValue = event?.target?.value || '';
    this._value = newValue;
    this.onChange(newValue);
    this.onTouched();
    this.valueChange.emit(newValue);
  }

  get inputValue(): string {
    return this._value;
  }

  set inputValue(val: string) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(val);
      this.onTouched();
      this.valueChange.emit(val);
    }
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this._value = value;
      this.valueChange.emit(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

