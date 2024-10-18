


enum VehicleType {
  Car = 'Car',
  Truck = 'Truck',
  Motorcycle = 'Motorcycle'
}

function descriptionType(text: string | number) {
  return(`type of parameter is ${typeof(text)}`);
}


function describeVehicle(vehicleType: VehicleType): string {
  switch (vehicleType) {
    case VehicleType.Car:
      return "This is a car, a four-wheeled motor vehicle typically used for transportation.";
    case VehicleType.Truck:
      return "This is a truck, a large motor vehicle designed to transport goods.";
    case VehicleType.Motorcycle:
      return "This is a motorcycle, a two-wheeled motor vehicle that is fast and agile.";
    default:
      return "Unknown vehicle type.";
  }
}

function firstElement<T>(item: T[]): T {
  return item[0];
}




