let ages = [50, 12, 38, 25, 28];

function checkAdult(age){
    return age >= 18;
}

console.log(ages.filter(checkAdult));

// forEach loop

ages.forEach(function(age, index){
    console.log(index+'-'+age);
})
