import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    {name: 'Beginner', selected: false },
    {name: 'Intermediate', selected: false },
    {name: 'Advanced', selected: false },
  ];

  selectCategory(category: { name: string; selected: boolean }) {
    this.categories.filter(c => c !== category)
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }
}
