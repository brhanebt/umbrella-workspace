import { Component, signal, ViewEncapsulation } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('Counter');
  protected readonly counter = signal(0);
  increment(): void {
    this.counter.update(value => value + 1);
  }
  
  decrement(): void {
    this.counter.update(value => value - 1);
  }
}
