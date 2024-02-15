var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var verhicles = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(model, performance, kilometersLeft, seats, fuelType, yearOfProduction, image) {
        this.model = model;
        this.performance = performance;
        this.kilometersLeft = kilometersLeft;
        this.seats = seats;
        this.fuelType = fuelType;
        this.yearOfProduction = yearOfProduction;
        this.image = image;
        verhicles.push(this);
    }
    Vehicles.prototype.calculateBasePrice = function () {
        // Dummy formula for calculating the base price
        var basePrice = 10000;
        var ageDiscount = 0.1 * (new Date().getFullYear() - this.yearOfProduction);
        var performanceMultiplier = this.performance === "high" ? 1.2 : 1;
        return basePrice - basePrice * ageDiscount + this.kilometersLeft * 0.1 * performanceMultiplier;
    };
    return Vehicles;
}());
var bikes = [];
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(model, performance, kilometersLeft, fuelType, yearOfProduction, image) {
        var _this = _super.call(this, model, performance, kilometersLeft, 1, fuelType, yearOfProduction, image) || this;
        _this.model = model;
        _this.performance = performance;
        _this.kilometersLeft = kilometersLeft;
        _this.fuelType = fuelType;
        _this.yearOfProduction = yearOfProduction;
        _this.image = image;
        return _this;
    }
    Motorbikes.prototype.calculatePrice = function () {
        // Custom formula for calculating the final price for motorbikes
        var additionalCost = 500;
        return this.calculateBasePrice() + additionalCost;
    };
    return Motorbikes;
}(Vehicles));
var trucks = [];
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(model, performance, kilometersLeft, fuelType, yearOfProduction, image) {
        var _this = _super.call(this, model, performance, kilometersLeft, 2, fuelType, yearOfProduction, image) || this;
        _this.model = model;
        _this.performance = performance;
        _this.kilometersLeft = kilometersLeft;
        _this.fuelType = fuelType;
        _this.yearOfProduction = yearOfProduction;
        _this.image = image;
        return _this;
    }
    Trucks.prototype.calculatePrice = function () {
        // Custom formula for calculating the final price for trucks
        var additionalCost = 1000;
        return this.calculateBasePrice() + additionalCost;
    };
    return Trucks;
}(Vehicles));
var car1 = new Vehicles("Mercedes S-Klasse", "500HP", 0, 4, "Gas", 2022, "https://www.mercedes-benz.at/content/dam/hq/passengercars/cars/s-class/s-class-saloon-wv223-pi/modeloverview/09-2022/images/mercedes-benz-s-class-wv223-modeloverview-696x392-09-2022.png");
var car2 = new Vehicles("Toyota Camry", "200HP", 10000, 5, "Gas", 2020, "https://www.motortrend.com/uploads/sites/10/2019/11/2020-toyota-camry-se-auto-sedan-angular-front.png");
var car3 = new Vehicles("Tesla Model 3", "Electric", 5000, 5, "Electric", 2023, "https://www.tesla.com/ownersmanual/images/GUID-B5641257-9E85-404B-9667-4DA5FDF6D2E7-online-en-US.png");
// Create 3 Trucks
var truck1 = new Trucks("Ford F-150", "300HP", 5000, "Gas", 2019, "https://di-uploads-pod41.dealerinspire.com/depaulaford/uploads/2019/11/2020-Ford-F-150-Albany-NY-Ford.jpg");
var truck2 = new Trucks("Chevrolet Silverado", "350HP", 20000, "Gas", 2021, "https://media.chevrolet.com/content/dam/Media/images/US/Vehicles/Chevrolet/Trucks/Silverado_HD/2021/Product/2021-Chevrolet-SilveradoHD-Carhartt-Edition-020.jpg");
var truck3 = new Trucks("Toyota Tundra", "250HP", 10000, "Gas", 2020, "https://di-uploads-pod20.dealerinspire.com/performancetoyotapa/uploads/2021/11/2022-Toyota-Tundra-SR5-Model-Left.jpg");
// Create 3 Motorbikes
var bike1 = new Motorbikes("Harley-Davidson Fat Boy", "150HP", 1000, "Gas", 2022, "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-fat-boy-114/2024-fat-boy-114-m04/360/2024-fat-boy-114-m04-motorcycle-03.jpg?impolicy=myresize&rw=1600");
var bike2 = new Motorbikes("Yamaha YZF-R1", "200HP", 500, "Gas", 2021, "https://images5.1000ps.net/images_bikekat/2024/4-Yamaha/329-R1/008-638352168674080398-yamaha-r1.jpg");
var bike3 = new Motorbikes("Honda CBR500R", "50HP", 2000, "Gas", 2020, "https://sheisarider.de/wp-content/uploads/2020/10/Honda-CBR500R-2021-rot.jpg");
verhicles.forEach(function (vehicle, index) {
    var result = document.getElementById("result");
    result.innerHTML += "\n        <div>\n            <div class=\"card mb-3 d-flex flex-column justify-content-between\" style=\"height:350px; \">\n                 <img height:\"200\" src=".concat(vehicle.image, " class=\"card-img-top img-fluid\" alt=\"...\">\n                <div class=\"d-flex flex-column align-items-center\">\n                        <h5 class=\"card-title\">").concat(vehicle.model, "</h5>\n                        <p class=\"d-inline-flex gap-1\">\n                            <button style=\"background: linear-gradient(to right, #1bc8ae, black, #FA94DE);\" class=\"btn btn-outline-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseExample").concat(index, "\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                            Mehr anzeigen\n                            </button>\n                        </p>\n                </div>\n         </div>\n\n                <div class=\"card\">\n\n                     <div class=\"collapse\" id=\"collapseExample").concat(index, "\">\n                        <div class=\"card card-body\">\n                        <p>Performance: ").concat(vehicle.performance, "</p>\n                        <p>Laufleitstung: ").concat(vehicle.kilometersLeft, " km</p>\n                        <p>Kraftstoff: ").concat(vehicle.fuelType, "</p>\n                        <p>Baujahr: ").concat(vehicle.yearOfProduction, "</p>\n                        <p>Preis: ").concat(vehicle.calculateBasePrice(), " \u20AC</p>\n                        </div>\n                    </div>\n                </div>\n        </div>\n    ");
});
