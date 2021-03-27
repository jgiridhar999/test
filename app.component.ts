--Code forf images display. 

import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    
    selector: 'app-root',
    templateUrl: '/app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent{
  title = 'I made it work Now!! Yuppy :-)';
  color = ["Blue", "Red", "Green", "Grey"];
  images = ["assets/DSC_0837.JPG","assets/DSC_0951.JPG","assets/DSC_0967.JPG" ];
  name = 'Giridhar';
  fact=5;
  inputNow: string = "0";
  counterValue = 0;
  public colorNew = 'red';
  public style = 'italic';
  public size = '30px';

  public showElement = false;

  get counter() {
      return this.counterValue;
  }

  set counter(value){
    this.counterValue= value;
  }

  decrement() {
    if(this.counter> 0) { 
      this.counter--;
    }
  }
  increment() {
    if(this.counter <10) {
      this.counter++;
    }
  }

  countryselected:string='';

  countries: any[] = [
    { code:'IND', country: 'India'}, 
    { code:'UK', country: 'United Kingdom'}, 
    { code:'USA', country: 'United States of America'}, 
    { code:'UAE', country: 'United Arab Emirates'},
  ]



  choice(code:string){
    this.countryselected = code;
  }


}


