function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (this.constructor == Computer) {
                throw new Error('Cannot create Abstract class directly!');
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(newBattery) {
            if (!(newBattery instanceof Battery)) {
                throw new TypeError('The argument passed is not an instance of the Battery class');
            }

            this._battery = newBattery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(newKeyboard) {
            if (!(newKeyboard instanceof Keyboard)) {
                throw new TypeError('The argument passed is not an instance of the Kyeboard class');
            }

            this._keyboard = newKeyboard;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(newMonitor) {
            if (!(newMonitor instanceof Monitor)) {
                throw new TypeError('The argument passed is not an instance of the Monitor class');
            }

            this._monitor = newMonitor;
        }
    }


    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
}


let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;


// let battery = new Battery('Energy', 3);
// let laptop = new Laptop('Hewlett Packard', 2.4, 4, 0.5, 3.12, 'Silver', battery);
// console.log(battery);                       // Battery {manufacturer: 'Energy', expectedLife: 3}
// console.log(laptop.manufacturer);           // Hewlett Packard;
// console.log(laptop.processorSpeed);         // 2.4;
// console.log(laptop.ram);                    // 4;
// console.log(laptop.hardDiskSpace);          // 0.5;
// console.log(laptop.weight);                 // 3.12;
// console.log(laptop.color);                  // Silver;
// console.log(laptop.battery);                // battery;
// console.log(laptop);                        // Laptop  {manufacturer: 'Hewlett Packard', processorSpeed: 2.4, ram: 4, hardDiskSpace: 0.5, weight: 3.12, color: 'Silver', _battery: Battery {manufacturer: 'Energy', expectedLife: 3 }}

let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);
let desktop = new Desktop('JAR Computers', 3.3, 8, 1, keyboard, monitor);
console.log(desktop.manufacturer);      // JAR Computers;
console.log(desktop.processorSpeed);    // 3.3;
console.log(desktop.ram);               // 8;
console.log(desktop.hardDiskSpace);     // 1;
console.log(desktop.keyboard);          // keyboard;
console.log(desktop.monitor);           // monitor;