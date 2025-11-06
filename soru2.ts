class Car {
  drive() {
    console.log("Araç sürülüyor...");
  }
}

class Truck {
  drive() {
    console.log("Kamyon sürülüyor...");
  }
  loadCargo() {
    console.log("Kargo yükleniyor...");
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if ('loadCargo' in vehicle) {
    vehicle.loadCargo();
  }
}

const car = new Car();
const truck = new Truck();

useVehicle(car);
useVehicle(truck);

