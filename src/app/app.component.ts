import { Component } from '@angular/core';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { BarcodeComponent } from './barcode/barcode.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QRCodeComponent , BarcodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reusableComponents';
  qrData = 'https://github.com/karan321github/reusable_comonents';
  qrSize = 256;
  barcodeValue = '35896235746'
  displayValue = false;
  format = "code39"
  lineColor = "#0aa"



}
