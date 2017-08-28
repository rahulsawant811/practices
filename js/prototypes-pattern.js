let Teslamodels = function(){
    var test = 567;
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

Teslamodels.prototype.go = function(){
    // Rotate wheel
}

Teslamodels.prototype.stop = function() {
  // Apply brake pads
}

// OR

Teslamodels.prototype = {
  go: function() {
    // Rotate wheels
  },
  stop: function() {
    // Apply brake pads
  }
}

let t = new Teslamodels();
console.log(t);
