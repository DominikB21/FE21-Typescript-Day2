let verhicles: Vehicles[] = [];

class Vehicles {
    constructor(
        public model: string,
        public performance: string,
        public kilometersLeft: number,
        public seats: number,
        public fuelType: string,
        public yearOfProduction: number,
        public image: string
    ) {
        verhicles.push(this);
    }

    calculateBasePrice(): number {
        // Dummy formula for calculating the base price
        const basePrice = 10000;
        const ageDiscount = 0.1 * (new Date().getFullYear() - this.yearOfProduction);
        const performanceMultiplier = this.performance === "high" ? 1.2 : 1;
        return basePrice - basePrice * ageDiscount + this.kilometersLeft * 0.1 * performanceMultiplier;
    }
}

let bikes: Motorbikes[] = [];

class Motorbikes extends Vehicles {
    constructor(
        public model: string,
        public performance: string,
        public kilometersLeft: number,
        public fuelType: string,
        public yearOfProduction: number,
        public image: string
    ) {
        super(model, performance, kilometersLeft, 1, fuelType, yearOfProduction, image);

    }

    calculatePrice(): number {
        // Custom formula for calculating the final price for motorbikes
        const additionalCost = 500;
        return this.calculateBasePrice() + additionalCost;
    }
}

let trucks: Trucks[] = [];

class Trucks extends Vehicles {
    constructor(
        public model: string,
        public performance: string,
        public kilometersLeft: number,
        public fuelType: string,
        public yearOfProduction: number,
        public image: string
    ) {
        super(model, performance, kilometersLeft, 2, fuelType, yearOfProduction, image);

    }

    calculatePrice(): number {
        // Custom formula for calculating the final price for trucks
        const additionalCost = 1000;
        return this.calculateBasePrice() + additionalCost;
    }
}

let car1 = new Vehicles("Mercedes S-Klasse", "500HP", 0, 4, "Gas", 2022, "https://www.mercedes-benz.at/content/dam/hq/passengercars/cars/s-class/s-class-saloon-wv223-pi/modeloverview/09-2022/images/mercedes-benz-s-class-wv223-modeloverview-696x392-09-2022.png");
let car2 = new Vehicles("Toyota Camry", "200HP", 10000, 5, "Gas", 2020, "https://www.motortrend.com/uploads/sites/10/2019/11/2020-toyota-camry-se-auto-sedan-angular-front.png");
let car3 = new Vehicles("Tesla Model 3", "Electric", 5000, 5, "Electric", 2023, "https://www.tesla.com/ownersmanual/images/GUID-B5641257-9E85-404B-9667-4DA5FDF6D2E7-online-en-US.png");

// Create 3 Trucks
let truck1 = new Trucks("Ford F-150", "300HP", 5000, "Gas", 2019, "https://di-uploads-pod41.dealerinspire.com/depaulaford/uploads/2019/11/2020-Ford-F-150-Albany-NY-Ford.jpg");
let truck2 = new Trucks("Chevrolet Silverado", "350HP", 20000, "Gas", 2021, "https://media.chevrolet.com/content/dam/Media/images/US/Vehicles/Chevrolet/Trucks/Silverado_HD/2021/Product/2021-Chevrolet-SilveradoHD-Carhartt-Edition-020.jpg");
let truck3 = new Trucks("Toyota Tundra", "250HP", 10000, "Gas", 2020, "https://di-uploads-pod20.dealerinspire.com/performancetoyotapa/uploads/2021/11/2022-Toyota-Tundra-SR5-Model-Left.jpg");

// Create 3 Motorbikes
let bike1 = new Motorbikes("Harley-Davidson Fat Boy", "150HP", 1000, "Gas", 2022, "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-fat-boy-114/2024-fat-boy-114-m04/360/2024-fat-boy-114-m04-motorcycle-03.jpg?impolicy=myresize&rw=1600");
let bike2 = new Motorbikes("Yamaha YZF-R1", "200HP", 500, "Gas", 2021, "https://images5.1000ps.net/images_bikekat/2024/4-Yamaha/329-R1/008-638352168674080398-yamaha-r1.jpg");
let bike3 = new Motorbikes("Honda CBR500R", "50HP", 2000, "Gas", 2020, "https://sheisarider.de/wp-content/uploads/2020/10/Honda-CBR500R-2021-rot.jpg");

verhicles.forEach((vehicle, index) => {
    let result = document.getElementById("result") as HTMLElement;

    result.innerHTML += `
        <div>
            <div class="card mb-3 d-flex flex-column justify-content-between" style="height:350px; ">
                 <img height:"200" src=${vehicle.image} class="card-img-top img-fluid" alt="...">
                <div class="d-flex flex-column align-items-center">
                        <h5 class="card-title">${vehicle.model}</h5>
                        <p class="d-inline-flex gap-1">
                            <button style="background: linear-gradient(to right, #1bc8ae, black, #FA94DE);" class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${index}" aria-expanded="false" aria-controls="collapseExample">
                            Mehr anzeigen
                            </button>
                        </p>
                </div>
         </div>

                <div class="card">

                     <div class="collapse" id="collapseExample${index}">
                        <div class="card card-body">
                        <p>Performance: ${vehicle.performance}</p>
                        <p>Laufleitstung: ${vehicle.kilometersLeft} km</p>
                        <p>Kraftstoff: ${vehicle.fuelType}</p>
                        <p>Baujahr: ${vehicle.yearOfProduction}</p>
                        <p>Preis: ${vehicle.calculateBasePrice()} €</p>
                        </div>
                    </div>
                </div>
        </div>
    `
});