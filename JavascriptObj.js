var Car = {
    Color:"red",
    Brand:"BMW",
    Modal:"M3",
    Variants:["Petrol","Diesel","LPG"]
}

//Basic object manipulation
console.log(Car.Variants);
console.log(Car["Modal"]);
Car["Tyre"]="Pirelli";//Add new property to object using bracket notation
Car.HP="155bhp";//Add new property using . notation
console.log(Car);
Car.Brand="Fiat";//Change Property of an object
console.log(Car.hasOwnProperty("Color"))//Check if an element exist in an object
delete Car.Brand;//delete an object property.
console.log(Car);
console.log(JSON.stringify(Car));//Convert an object to Json String

function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += objName + '.' + i + ' = ' + obj[i] + '\n';
      }
    }
    return result;
  
}
console.log(showProps(Car,"Car"));




/*
  // Animal properties and method encapsulation
var Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function() {  // Method which will display type of Animal
      console.log(this.type);
    }
  };
  
  // Create new animal type called animal1 
  var animal1 = Object.create(Animal);
  animal1.displayType(); // Output:Invertebrates
  
  // Create new animal type called Fishes
  var fish = Object.create(Animal);
  fish.type = 'Fishes';
  fish.displayType(); // Output:Fishes

*/
