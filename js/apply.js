let obj = {num:3};

let addTo = function(a,b,c){
    return this.num + a + b + c;
}

console.log(addTo.apply(obj, [1, 2, 3]));
