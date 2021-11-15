import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pirma() {
    let data = [1, 20, 5, -1, 0, 10, 25, 33];
    // var ats = data.reduce(function (a, b) {
    //   return Math.max(a, b);
    // }, 0);
    var ats = data[0];
    var ats1 = data[0];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element > ats) {
        ats = element;
      }
      if (element < ats1) {
        ats1 = element;
      }
    }

    console.log('pirma uzduotis max: ' + ats);
    console.log('pirma uzduotis min: ' + ats1);
  }

  antra() {
    let skaicius = 5;
    let laipsnis = 4;
    // var ats = Math.pow(skaicius, laipsnis);
    var ats = 1;
    for (let index = 0; index < laipsnis; index++) {
      const element = ats*skaicius;
      ats = element;
    }

    console.log('antra uzduotis ats: ' + ats);
  }

  trecia() {
    let data = [5, 10, 20, 30,11, 12, 13, 15];
    // var ats = data.filter(number => number % 2 == 0);
    var ats: any = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element%2 == 0) {
        ats.push(element);
      }
      
    }
    console.log('trecia uzduotis ats: ' + ats);
  }

  ketvirta() {
    let data = [5,1,3,4,5,6,7];
    // var ats = data.reduce((a, b) => a + b) / data.length
    var ats = 0;
    var sum = 0;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      sum = sum + element;
      ats = sum/data.length;
    }
    console.log('ketvirta uzduotis ats: ' + ats);
  }

  penkta() {
    let data = [43, "what", 9, true, "cannot", false, "be", 3, true];
    // var ats = data.reverse();
    var ats: any = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      ats.unshift(element);
    }
    console.log('penkta uzduotis ats: ' + ats);
  }

}
