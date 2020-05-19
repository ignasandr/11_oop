"use strict";

// OOP - Object Oriented Programming (objektinis programavimas)
// Kas tas OOP ir su kuo valgoma? Pagrindinis dalykas yra klasėswitch

// class - receptas
// object - pyragas


  // params:
  // resolution
  // ratio
  // color
  // remote (bool)
  // type: flat / CRT

  // metodai: ka galima su juo daryti?
  // isjungti / isjungti
  // pakeisti kanala
  // keisti garsa

class Tv {
  constructor(resolution, ratio, color, remote, type) {
    this.resolution = resolution;
    this.ratio = ratio;
    this.color = color;
    this.remote = remote;
    this.type = type;
    this.turnedOn = false;
    this.channel = '';
    this.volume = 0;
  }

  turnOn(){
    this.turnedOn = true;
    console.log('turned Off')
  }

  turnOn(){
    this.turnedOff = false;
    console.log('turned On')
  }
}

const silelis = new Tv([4000, 3000], [4, 3], 'black', false, 'CRT');
console.log(silelis);

const lg = new Tv([8000, 6000], [4, 3], 'silver', true, 'flat');
console.log(lg);

silelis.turnOn();

lg.turnOn();

class New {
}

// /asdkjhfasdjkf
