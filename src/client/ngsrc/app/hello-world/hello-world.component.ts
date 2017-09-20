import { Component, OnInit, Inject, DoCheck } from '@angular/core';

@Component({
  selector: 'aseed-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, DoCheck {
  randomNumbers: number[] = [];

  constructor(@Inject('ng1RandomNumbers') private ng1RandomNumbers: any ) {
    this.addRandomNumber();
  }

  ngOnInit() {
  }

  private addRandomNumber() {
    this.randomNumbers.push(this.ng1RandomNumbers.randomInt(0, 10000));
  }

  // generate new random number on every digest
  ngDoCheck() {
    this.addRandomNumber();
  }

}
