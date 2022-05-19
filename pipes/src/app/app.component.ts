import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'bernard dushimimana';
  todaysDate = new Date();
  cost = 2000;
  pizza = {
    toppings: ['pepperoni', 'mushroom'],
    size: 'Large',
  };
}
