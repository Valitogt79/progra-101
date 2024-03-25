//Clases

export class Car {

  static className = 'Car';

  public readonly brand: string;
  public doors: number;
  public fuelTank: number;
  public isRunning: boolean;
  public type: string;
  private readonly createdAt: number;

  constructor(  brand: string, type: string ) {
    this.brand = brand;
    this.doors = 0;
    this.fuelTank = 0;
    this.isRunning = false;
    this.type = type;
    this.createdAt = 123456789;
  }
  public turOn() {
    if (this.isRunning) {
      console.log("The car is already running");
      return;
    }
    if (this.fuelTank <= 0) {
      console.log("El Carro no tiene Gasolina");
      return;
    }
    this.isRunning = true;
    console.log("El carro está encendido");
  }
  fillTank(gas: number) {
    if (gas <= 0) {
      console.log("El gas tiene que ser positivo");
      return;
    }

    let newFuelTank = this.fuelTank + gas;
    if (newFuelTank >= 100) {
      this.fuelTank = 100;
    } else {
      this.fuelTank = this.fuelTank = newFuelTank;
    }
  }
}

let myMazda = new Car('Mazda', 'Sedan');
//myMazda.brand = 'Honda';
//myMazda.type = 'Sedan';
//console.log(myMazda.createdAt);  //privadd

console.log(myMazda);
myMazda.fillTank(30);
myMazda.fillTank(30);
myMazda.turOn();
console.log(myMazda);

console.log(Car.className);