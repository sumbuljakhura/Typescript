// Define a function called carInfo
function carInfo(manufacturer: string, modelName: string, ...otherInfo: { [key: string]: any }[]): object {
    // Create an object to store information about the car
    let car: { manufacturer: string; modelName: string; [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add the additional information to the car object
    for (let info of otherInfo) {
        for (let key in info) {
            car[key] = info[key];
        }
    }

    return car;
}

// Call the function with the required information and additional name-value pairs
let cars = carInfo("Toyota", "Camry", { color: "Blue", features: ["Navigation", "Sunroof"] });

// Print the object returned by the function
console.log(cars);
