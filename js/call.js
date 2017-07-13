let obj = {num:2};

let addTo = function(a,b){
    return this.num + a + b;
}

console.log(addTo.call(obj, 1, 2));

// const firstName = 'Rahul';
// const secondName = 'Sawant';
//
// function sayHello(firstName, secondName) {
//     console.log(`${this.sayHello()} ${firstName} ${secondName}`);
// }
//
// var context = {
//     sayHello() {
//         return 'Hello';
//     }
// }
//
// sayHello.call(context, firstName, secondName); // Hello Rahul Sawant
