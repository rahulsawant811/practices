let addTo = function(passed){
    let add = function(inner){
        return passed + inner;
    }

    return add;
};

let addThree = new addTo(3);

console.log(addThree(1));
