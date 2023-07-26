
//  4. write a class to calculate the uber price.

class Uber {
    constructor(baseFare, farePerKm, typeOfTime, farePerMinute, typeOfVehicle) {
      this.baseFare = baseFare;
      this.farePerKm = farePerKm;
      this.farePerMinute = farePerMinute;
      this.typeOfVehicle = typeOfVehicle;
      this.typeOfTime = typeOfTime;
    }
  
    calculatePrice(distanceInKm, timeInMinutes) {
      const distancePrice = this.farePerKm * distanceInKm;
      const timePrice = this.farePerMinute * timeInMinutes;
      
      const dayTimePrice = this.typeOfTime > 10 && this.typeOfTime < 18 ? this.baseFare * 5 : this.baseFare * 2;
  
      let vehicleBasePrice;
      switch (this.typeOfVehicle) {
        case 'Uber Go':
          vehicleBasePrice = 20;
          break;
        case 'Uber XL':
          vehicleBasePrice = 40;
          break;
        case 'Uber Premier':
          vehicleBasePrice = 30;
          break;
        case 'Uber Taxi':
          vehicleBasePrice = 15;
          break;
        default:
          vehicleBasePrice = 10;
      }
  
      const totalPrice = this.baseFare + distancePrice + timePrice + dayTimePrice + vehicleBasePrice;
      return totalPrice;
    }
  }
  
  const baseFare = 5;
  const farePerKm = 1.5;
  const typeOfTime = 12;
  const farePerMinute = 0.25;
  const typeOfVehicle = 'Uber XL';
  
  const calculator = new Uber(baseFare, farePerKm, typeOfTime, farePerMinute, typeOfVehicle);
  const distance = 10; // in kilometers
  const time = 25; // in minutes
  
  const totalCost = calculator.calculatePrice(distance, time);
  console.log(`Uber Price: ₹${totalCost}`);
  