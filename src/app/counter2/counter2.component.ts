import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss'],
  providers: [CounterService]
})
export class Counter2Component implements OnInit {

  counter: number = 0

  constructor(private svc: CounterService) { }

  ngOnInit(): void {
  }

  inc() {
    this.svc.increment()
    this.counter = this.svc.getValue();
  }

  dec() {
    this.svc.decrement()
    this.counter = this.svc.getValue();
  }

}
