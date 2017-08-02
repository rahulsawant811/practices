let Car = function(color){
    this.color = color;
}

Car.prototype.getColor = function () {
    console.log('Color: '+ this.color);
};

let color = new Car('Red');
color.getColor();

console.log(color);
