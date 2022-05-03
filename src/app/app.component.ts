import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordgen';
  length: any;
  password: any;
  alphabets: any = false;
  numbers: any = false;
  special: any = false;
  generatePassword() {
    this.password = '';
    var charSet = "";
    if (this.alphabets) {
      charSet += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } 
    if (this.numbers) {
      charSet += "0123456789";
    }
    if (this.special) {
      charSet += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    if ((!this.alphabets && !this.numbers && !this.special) || (!this.length || this.length < 1)) {
      this.password = 'Please Select Atleast One Checkbox And Please Enter Length Greater Than 0'
    } else {
      for (var i = 0; i < this.length; i++) {
        this.password += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      console.log(this.password);
    }
  }
}
