// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Define 2 other Child classes and name them Motorbikes and Trucks
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)

interface vehicleInfo{
  model: string;
  year: number;
  km: number;
  fuelType: string;
}

class Vehicles implements vehicleInfo{
  constructor(public model: string, public year: number, public km: number, public fuelType: string, public color?: string, public img?: string){}
  createVehicleCard(){
    return `<div class="col">
      <div class="card">
        <img src="${this.img}" class="card-img-top" alt="${this.year} ${this.model}">
        <div class="card-body">
      <h5 class="card-title">${this.year} ${this.model}</h5>
      <p class="card-text"><ul>
      <li>Model: ${this.model}</li>
      <li>Year of production: ${this.year}</li>
      <li>Kilometers driven: ${this.km}</li>
      <li>Fuel type: ${this.fuelType}</li>
      <li>Color: ${this.color}</li>
        </ul></p>
      <a href="#" class="btn btn-primary">Show price</a>
        </div>
      </div>
    </div>`
  }
}

class Cars extends Vehicles{
  constructor(public model: string, public year: number, public km: number, public fuelType: string, public seats: number, public color?: string, public img?: string){
    super(model, year, km, fuelType, color, img)
    this.seats = seats;
  }
  createVehicleCard(){
    return `<div class="col">
      <div class="card">
      <img src="${this.img}" class="card-img-top" alt="${this.year} ${this.model}">
      <div class="card-body">
        <h5 class="card-title">${this.year} ${this.model}</h5>
        <p class="card-text"><ul>
        <li>Model: ${this.model}</li>
        <li>Year of production: ${this.year}</li>
        <li>Kilometers driven: ${this.km}</li>
        <li>Fuel type: ${this.fuelType}</li>
        <li>Color: ${this.color}</li>
        <li>Seats: ${this.seats}</li>
      </ul></p>
        <a href="#" class="btn btn-primary">Show price</a>
      </div>
        </div>
    </div>`
  }
}

class Motorbikes extends Vehicles{
  constructor(public model: string, public year: number, public km: number, public fuelType: string, public body: string, public color?: string, public img?: string){
    super(model, year, km, fuelType, color, img);
    this.body = body;
  }
  createVehicleCard(){
    return `<div class="col">
      <div class="card">
      <img src="${this.img}" class="card-img-top" alt="${this.year} ${this.model}">
      <div class="card-body">
        <h5 class="card-title">${this.year} ${this.model}</h5>
        <p class="card-text"><ul>
        <li>Model: ${this.model}</li>
        <li>Year of production: ${this.year}</li>
        <li>Kilometers driven: ${this.km}</li>
        <li>Fuel type: ${this.fuelType}</li>
        <li>Color: ${this.color}</li>
        <li>Body type: ${this.body}</li>
      </ul></p>
        <a href="#" class="btn btn-primary">Show price</a>
      </div>
        </div>
    </div>`
  }
}

class Trucks extends Vehicles{
  constructor(public model: string, public year: number, public km: number, public fuelType: string, public type: string, public clearence: number, public color?: string, public img?: string){
    super(model, year, km, fuelType, color, img);
    this.type = type;
    this.clearence = clearence;
  }
  createVehicleCard(){
    return `<div class="col">
      <div class="card">
      <img src="${this.img}" class="card-img-top" alt="${this.year} ${this.model}">
      <div class="card-body">
        <h5 class="card-title">${this.year} ${this.model}</h5>
        <p class="card-text"><ul>
        <li>Model: ${this.model}</li>
        <li>Year of production: ${this.year}</li>
        <li>Kilometers driven: ${this.km}</li>
        <li>Fuel type: ${this.fuelType}</li>
        <li>Color: ${this.color}</li>
        <li>Body type: ${this.type}</li>
        <li>Clearence: ${this.clearence}cm</li>
      </ul></p>
        <a href="#" class="btn btn-primary">Show price</a>
      </div>
        </div>
    </div>`
  }
}

class SemiTrucks extends Vehicles{
  constructor(public model: string, public year: number, public km: number, public fuelType: string, public length: number, public form: string, public color?: string, public img?: string){
    super(model, year, km, fuelType, color, img)
    this.length = length;
    this.form = form;
  }
  createVehicleCard(){
    return `<div class="col">
      <div class="card">
      <img src="${this.img}" class="card-img-top" alt="${this.year} ${this.model}">
      <div class="card-body">
        <h5 class="card-title">${this.year} ${this.model}</h5>
        <p class="card-text"><ul>
        <li>Model: ${this.model}</li>
        <li>Year of production: ${this.year}</li>
        <li>Kilometers driven: ${this.km}</li>
        <li>Fuel type: ${this.fuelType}</li>
        <li>Color: ${this.color}</li>
        <li>Length: ${this.length}m</li>
        <li>Form: ${this.form}</li>
      </ul></p>
        <a href="#" class="btn btn-primary">Show price</a>
      </div>
        </div>
    </div>`
  }
}

let carTest = new Cars("BMW M3", 2012, 175000, "Diesel", 4, "red", "https://upload.wikimedia.org/wikipedia/commons/7/7a/2012_BMW_M3_M_Performance_Edition_4.0_Front.jpg");

let motorbikeTest = new Motorbikes("Kawasaki Z300", 2016, 7900, "Petrol", "Nakedbike", "black","https://live.staticflickr.com/7655/16832231765_290bb0d52f_b.jpg");

let truckTest = new Trucks("Mitsubishi",2010,150500,"Diesel","Pickup",20,"Red","https://upload.wikimedia.org/wikipedia/commons/4/4f/Mitsubishi_L200_CRS_Crew_Cab_2010_%2815179415603%29.jpg")

let semiTest = new SemiTrucks("Peterbilt",1980,350000,"Diesel",20,"Sleeper Cab","blue","https://upload.wikimedia.org/wikipedia/commons/3/31/Green_Peterbilt_379.jpg")

const result = document.getElementById("result");

result!.innerHTML += carTest.createVehicleCard();
result!.innerHTML += motorbikeTest.createVehicleCard();
result!.innerHTML += truckTest.createVehicleCard();
result!.innerHTML += semiTest.createVehicleCard();