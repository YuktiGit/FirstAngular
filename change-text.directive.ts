import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]',
})
export class ChangeTextDirective {
  SpanEle: ElementRef;
  constructor(ele: ElementRef) {
    console.log(ele);
    // ele.nativeElement.innerText = this.spanText;
    this.SpanEle = ele;
    ele.nativeElement.innerText = 'After Change';
  }
  clickSpan() {
    this.SpanEle.nativeElement.innerText = '';
  }
}
