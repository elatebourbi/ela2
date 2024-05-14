import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jour-ferie',
  templateUrl: './jour-ferie.component.html',
  styleUrls: ['./jour-ferie.component.css']
})
export class JourFerieComponent {
  dates: Date[] = [];

  constructor() {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      this.dates.push(new Date(today.getFullYear(), today.getMonth(), i));
    }
  }
  
}
