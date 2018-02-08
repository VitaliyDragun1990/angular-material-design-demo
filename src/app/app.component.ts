import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    { id: 0, name: 'Red' },
    { id: 1, name: 'Green' },
    { id: 2, name: 'Blue' }
  ];

  minDate = new Date(2017, 0, 1);
  maxDate = new Date(2017, 7, 1);

  favoriteColor;
}
