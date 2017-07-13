let obj = {num:3};

let addTo = function(a,b,c){
    return this.num + a + b + c;
}

// console.log(addTo.bind(obj, 1, 2, 3));

let bound = addTo.bind(obj, 1, 2, 3)
console.dir(bound);
console.dir(bound());
