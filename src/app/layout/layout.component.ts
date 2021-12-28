import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  barData: ChartData<'bar'> = {
    labels: ['Foo', 'Bar', 'Baz'],
    datasets: [
      { data: [100, 255, 445], label: 'A' },
      { data: [70, 95, 200], label: 'B'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
