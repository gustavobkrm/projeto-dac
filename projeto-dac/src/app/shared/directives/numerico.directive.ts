import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numerico]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumericoDirective,
    multi: true
  }]
})
export class NumericoDirective {

  onChange: any;
  onTouched: any;

  @HostListener('keyup', ['$event'])onKeyUp($event: any) {
    let valor = $event.target.value;
    valor = valor.replace(/[\D]/g, '');
    $event.target.value= valor;
    this.onChange(valor);
  }
  constructor(private el: ElementRef) { }

  registerOnChange(fn: any): void{
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
