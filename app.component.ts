import { Component } from '@angular/core';
import { books } from './Books';
import { ChangeTextDirective } from './change-text.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstPrj';
  ht = 15;
  wd = 25;
  i = 2000;
  image =
    'https://upload.wikimedia.org/wikipedia/en/f/fe/The_NorthCap_University_logo.png';
  myFunction() {
    console.log('Hello World!!!');
    console.log(this.fullName);
    this.addPrice();
    this.addQty();
  }
  // myFun(ev) {
  //   console.log(ev);
  // console.log(this.fullName);
  // }
  divClick() {
    console.log('Hello Universe!!!');
  }
  fullName: string = 'Yukti';
  b = books;
  disp = 'none';
  TotalPrice = 0;
  TotalQuantity = 0;
  bt = true;
  btn = true;
  btnc = true;
  spanText = 'An Example for custom directive';

  addPrice() {
    for (let i = 0; i < this.b.length; i++) {
      this.TotalPrice = this.TotalPrice + this.b[i].price;
    }
  }
  addQty() {
    for (let i = 0; i < this.b.length; i++) {
      this.TotalQuantity = this.TotalQuantity + this.b[i].qty;
    }
  }

  myFun2(ev: any) {
    console.log(ev);
  }
  myStyle() {
    let myStyle = {
      height: this.ht + 'px',
      width: this.wd + 'px',
      'background-color': 'green',
      display: this.disp,
    };
    return myStyle;
  }
  increaseSize() {
    this.ht += 1;
    this.wd += 1;
  }
  labelDisplay() {
    this.disp == 'none' ? (this.disp = 'inline') : (this.disp = 'none');
  }
  applyClass() {
    let myclass = {
      btn: this.bt,
      'btn-primary': this.btn,
      buttonClass: this.btnc,
    };
    return myclass;
  }
  AddRemoveClass() {
    if (this.bt == true) {
      this.bt = false;
      this.btn = false;
      this.btnc = false;
    } else {
      this.bt = true;
      this.btn = true;
      this.btnc = true;
    }
  }
}
export var o = new AppComponent();
