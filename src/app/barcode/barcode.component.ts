import { AfterViewInit, Component, Input, OnChanges, } from '@angular/core';
import JsBarcode /* , { Options as jsBarcodeOptions } */ from 'jsbarcode';
@Component({
  selector: 'app-barcode',
  standalone: true,
  imports: [],
  templateUrl: './barcode.component.html',
  styleUrl: './barcode.component.css',
})
export class BarcodeComponent implements AfterViewInit , OnChanges {
  
  @Input() barcodeValue: string = '';
  @Input() format: string = 'CODE128';
  @Input() lineColor: string = '#000'
  @Input() displayValue: boolean = true;

  ngAfterViewInit() {
    this.generateBarcode();
  }

  ngOnChanges(){
    this.generateBarcode();
  }
  
  generateBarcode() {
    if (this.barcodeValue) {
      JsBarcode('#barcode', this.barcodeValue, {
        format: this.format, 
        lineColor: this.lineColor,
        width: 2,
        height: 100,
        displayValue: this.displayValue,
      });
    }
  }
}
