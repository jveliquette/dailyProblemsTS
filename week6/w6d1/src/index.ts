/* Scenario
You work for a company that manufactures radios, such as police-band radios and battery operated radios for emergency situations. You are asked to help build a class that represents a car radio. Your co-worker already developed a radio interface that can be used by any type of radio. Now it's your turn to create a car radio class that implements this interface:

interface Radio {
    powerOn(): void;
    powerOff(): void;
    setStation(station: number):
}

Requirements:
        - Add the Radio interface. // Done
        - Create a new class named CarRadio that implements the Radio interface. // Done
        - Add a private property that is a boolean called isOn to manage the radio's state (on or off). // Done
        - Add a private property that is a number called currentStation to hold the station number to which the radio is currently tuned. // Done
        - Add methods called powerOn and powerOff that set the isOn property to true and false, respectively. // Done
        - Add a setStation method that accepts a number as an argument and sets the currentStation property to the value of the argument. // Done
        - Add a new method called getStation that returns the value of the currentStation property. // Done
        - Add a constructor that creates a new instance of a CarRadio that is turned off and has the station set to 88.1. // Done
        - Add a function called testCarRadio that instantiates a new car radio object, then calls the getStation method and returns the current station number. */

// Interface for the car radio
interface Radio {
    powerOn(): void; // powerOn function (does not return anything)
    powerOff(): void; // powerOff function (does not return anything)
    setStation(station: number): void; // setStation function takes in parameter of station which is of type number (does not return anything)
}

// CarRadio class Implementing the Radio Interface
class CarRadio implements Radio {
    private isOn: boolean;
    private currentStation: number;

    powerOn() {
        this.isOn = true;
    }

    powerOff() {
        this.isOn = false;
    }

    setStation(station: number) {
        this.currentStation = station;
    }

    getStation(): number {
        return this.currentStation;
    }

    constructor() {
        this.isOn = false;
        this.currentStation = 88.1;
    }

}
function testCarRadio(): number {
    const carRadio = new CarRadio();
    return carRadio.getStation();
}
