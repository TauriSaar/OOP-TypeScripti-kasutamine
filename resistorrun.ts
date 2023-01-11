class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number, i: number): number {
        return u * i;
    }
    getResistance(): number {
        return this.r;
    }
}

// voltage of 5 volts acts on the resistor and a current of 2 amperes passes through it. How many watts of heat is released from the resistor?
let r1 = new Resistor(0);
let heat = r1.getPower(5, 2);
console.log(heat + " watts");

//A voltage of 4 volts acts on the resistor, and a power of 6 watts is released from it. How many amperes of current flow through the resistor?
let current = r1.getCurrent(4);
console.log(current + " amperes");

// How many ohms is the resistance of the previous resistor?
let resistance = r1.getResistance();
console.log(resistance + " ohms");

//The power of the kettle is 1 kilowatt, there is 1 liter of water inside. By how many degrees does the temperature of the water rise from 20 degrees Celsius in one minute, if all the power of the switched-on jug is used to heat the water?
let power = 1000;
let volume = 1;
let initialTemp = 20;
let specificHeat = 4.18; // J/g*C
let mass = volume * 1000; // 1 liter = 1000g
let tempRise = (power * 60) / (mass * specificHeat);
console.log(tempRise + " degrees Celsius");

//How many amperes of current will flow through the aforementioned kettle if the mains voltage is 220 volts?
let voltage = 220;
let kettleCurrent = voltage / resistance;
console.log(kettleCurrent + " amperes");

// How many ohms is the resistance of this kettle?
let kettleResistance = voltage / kettleCurrent;
console.log(kettleResistance + " ohms");