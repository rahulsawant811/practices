const Car = function() {
}

Car.prototype.print = function () {
    console.log('I am a Car');
};

const ToyCar = function(){
}

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = function(){
    console.log('I am a ToyCar');
}

const ToyTransformer = function(){
}

ToyTransformer.prototype = Object.create(ToyCar.prototype);

ToyTransformer.prototype.print = function(){
    console.log('I am a ToyTransformer');
}

const toyota = new Car();
const legoCar = new ToyCar();
const optimusPrime = new ToyTransformer();

console.log(toyota.print());
console.log(legoCar.print());
console.log(optimusPrime.print());
