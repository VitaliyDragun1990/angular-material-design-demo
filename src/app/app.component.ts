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

  favoriteColor;
}
