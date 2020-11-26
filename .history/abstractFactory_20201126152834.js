function Car() { this.name = "Car"; this.wheels = 4; }
function Truck() { this.name = "Truck"; this.wheels = 6; }
function Bike() { this.name = "Bike"; this.wheels = 2; }

const vehicleFactory = {
    createVehicle: function (type) {
        switch (type.toLowerCase()) {
            case "car":
                return new Car();
            case "truck":
                return new Truck();
            case "bike":
                return new Bike();
            default:
                return null;
        }
    }
};

const car = vehicleFactory.createVehicle("Car"); // Car { name: "Car", wheels: 4 }  
const truck = vehicleFactory.createVehicle("Truck"); // Truck { name: "Truck", wheels: 6 }  
const bike = vehicleFactory.createVehicle("Bike"); // Bike { name: "Bike", wheels: 2 }  
const unknown = vehicleFactory.createVehicle("Boat"); // null ( Vehicle not known )