"use strict";
// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price
class Vehicles {
    constructor(model, year, km, fuelType, baseprice, color, img) {
        this.model = model;
        this.year = year;
        this.km = km;
        this.fuelType = fuelType;
        this.baseprice = baseprice;
        this.color = color;
        this.img = img;
    }
    createVehicleCard() {
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
    </div>`;
    }
}
class Cars extends Vehicles {
    constructor(model, year, km, fuelType, baseprice, seats, color, img) {
        super(model, year, km, fuelType, baseprice, color, img);
        this.model = model;
        this.year = year;
        this.km = km;
        this.fuelType = fuelType;
        this.baseprice = baseprice;
        this.seats = seats;
        this.color = color;
        this.img = img;
        this.seats = seats;
    }
    calcPrice() {
        let yearSubt = 0;
        let kmSubt = 0;
        //console.log(this.model);
        //console.log(this.baseprice);
        if (this.year < 2015) {
            yearSubt = this.baseprice * 0.15;
        }
        else if (this.year < 2005) {
            yearSubt = this.baseprice * 0.35;
        }
        if (this.km > 50000) {
            kmSubt = this.baseprice * 0.1;
        }
        else if (this.km > 150000) {
            kmSubt = this.baseprice * 0.2;
        }
        //console.log(yearSubt);
        //console.log(kmSubt);
        let depriciation = yearSubt + kmSubt;
        return this.baseprice - depriciation;
    }
    createVehicleCard() {
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
        <span>${this.calcPrice()}</span>
      </div>
        </div>
    </div>`;
    }
}
class Motorbikes extends Vehicles {
    constructor(model, year, km, fuelType, baseprice, body, color, img) {
        super(model, year, km, fuelType, baseprice, color, img);
        this.model = model;
        this.year = year;
        this.km = km;
        this.fuelType = fuelType;
        this.baseprice = baseprice;
        this.body = body;
        this.color = color;
        this.img = img;
        this.body = body;
    }
    createVehicleCard() {
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
    </div>`;
    }
}
class Trucks extends Vehicles {
    constructor(model, year, km, fuelType, baseprice, type, clearence, color, img) {
        super(model, year, km, fuelType, baseprice, color, img);
        this.model = model;
        this.year = year;
        this.km = km;
        this.fuelType = fuelType;
        this.baseprice = baseprice;
        this.type = type;
        this.clearence = clearence;
        this.color = color;
        this.img = img;
        this.type = type;
        this.clearence = clearence;
    }
    createVehicleCard() {
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
    </div>`;
    }
}
class SemiTrucks extends Vehicles {
    constructor(model, year, km, fuelType, baseprice, length, form, color, img) {
        super(model, year, km, fuelType, baseprice, color, img);
        this.model = model;
        this.year = year;
        this.km = km;
        this.fuelType = fuelType;
        this.baseprice = baseprice;
        this.length = length;
        this.form = form;
        this.color = color;
        this.img = img;
        this.length = length;
        this.form = form;
    }
    createVehicleCard() {
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
    </div>`;
    }
}
let carTest = new Cars("BMW M3", 2012, 175000, "Diesel", 35000, 4, "red", "https://upload.wikimedia.org/wikipedia/commons/7/7a/2012_BMW_M3_M_Performance_Edition_4.0_Front.jpg");
let motorbikeTest = new Motorbikes("Kawasaki Z300", 2016, 7900, "Petrol", 6500, "Nakedbike", "black", "https://live.staticflickr.com/7655/16832231765_290bb0d52f_b.jpg");
let truckTest = new Trucks("Mitsubishi", 2010, 150500, "Diesel", 28900, "Pickup", 20, "Red", "https://upload.wikimedia.org/wikipedia/commons/4/4f/Mitsubishi_L200_CRS_Crew_Cab_2010_%2815179415603%29.jpg");
let semiTest = new SemiTrucks("Peterbilt", 1980, 350000, "Diesel", 20, 50000, "Sleeper Cab", "blue", "https://upload.wikimedia.org/wikipedia/commons/3/31/Green_Peterbilt_379.jpg");
const result = document.getElementById("result");
result.innerHTML += carTest.createVehicleCard();
result.innerHTML += motorbikeTest.createVehicleCard();
result.innerHTML += truckTest.createVehicleCard();
result.innerHTML += semiTest.createVehicleCard();
