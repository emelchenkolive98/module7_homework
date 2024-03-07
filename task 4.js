// Задание 4

//Родительская функция
function ElectricDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isOn = false;
}

//Метод родительской функции включение/выключение
ElectricDevice.prototype.turnOn = function() {
  this.isOn = true;
  console.log(`${this.name} включен!`)
}

ElectricDevice.prototype.turnOff = function() {
  this.isOn = false;
  console.log(`${this.name} выключен!`)
}

//Дочерняя функция электроприборов
function Computer(name, model, color, power) {
  ElectricDevice.call(this, name, power);
  this.model = model;
  this.color = color;
}

Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

function Lamp(name, model, color, brightness, power) {
  ElectricDevice.call(this, name, power);
  this.model = model;
  this.color = color;
  this.brightness = brightness;
}

Lamp.prototype = Object.create(ElectricDevice.prototype);
Lamp.prototype.constructor = Lamp;

//Считаем суммарную потребляемую мощность всех включенных электроприборов
function calculateTotalPower(...devices) {
  let totalPower = 0;

  devices.forEach((myDevice) => {
    if (myDevice.isOn) {
      totalPower += myDevice.power;
    }
  });

  console.log(`Суммарная потребляемая мощность всех включенных электроприборов: ${totalPower} ВТ`);
}

//Создаем экземпляры электроприборов
const laptop = new Computer('Acer', 'Predator Helios PH317', 'Черный', 80);
const tableLamp = new Lamp('EICHHOLTZ', '101403 SOHO', 'Белый', 'Яркий', 60);
const computer = new Computer('Hard Comp', 'Intel Core i5-11400f', 'Красный', 220);

//Подключение электроприборов к розетке
tableLamp.turnOn();
computer.turnOn();

calculateTotalPower(tableLamp, computer);