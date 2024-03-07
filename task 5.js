//Задание 5

class ElectricDevice {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    console.log(`${this.name} включен!`)
  }

  turnOff() {
    this.isOn = true;
    console.log(`${this.name} включен!`)
  }
}

class Computer extends ElectricDevice {
  constructor(name, model, color, power) {
    super(name, power);
    this.model = model;
    this.color = color;
  }
}

class Lamp extends ElectricDevice {
  constructor(name, model, color, brightness, power) {
    super(name, power);
    this.model = model;
    this.color = color;
    this.brightness = brightness;
  }
}

function calculateTotalPower(...devices) {
  let totalPower = 0;

  devices.forEach((myDevice) => {
    if (myDevice.isOn) {
      totalPower += myDevice.power;
    }
  });

  console.log(`Суммарная потребляемая мощность всех включенных электроприборов: ${totalPower} ВТ`);
}

const laptop = new Computer('Acer', 'Predator Helios PH317', 'Черный', 80);
const tableLamp = new Lamp('EICHHOLTZ', '101403 SOHO', 'Белый', 'Яркий', 60);
const computer = new Computer('Hard Comp', 'Intel Core i5-11400f', 'Красный', 220);


tableLamp.turnOn();
computer.turnOn();

calculateTotalPower(tableLamp, computer);