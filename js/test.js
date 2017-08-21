// let num = 535;
//
// let highest_num = num.toString().split('').sort(function(a,b){return b-a}).join('');
//
// console.log(parseInt(highest_num));

// let dog = {
//     sound: 'Bhow',
//     talk: function(){
//         console.log(this.sound);
//     }
// }
//
// dog.talk()
//
// let talkFun = dog.talk;
//
// // console.dir(talkFun);
//
// let bound = talkFun.bind(dog);
//
// console.dir(bound);
//
// bound();

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length)); // [8, 6, 7, 9]

// Comparison operator

let a = {};
let b = {};

// console.log(typeof(a)); Object
// console.log(typeof(b)); Object

if(a === b){
    console.log('Pass');
}else{
    console.log('Fail');
}

// Add element in between
var arr1 = [1,2,3];
arr1.splice(2, 0, 5);
console.log(arr1); // [1,2,5,3]

// Remove element from index
var arr2 = [1,2,3];
arr2.splice(1, 1);
console.log(arr2); // [1,3]
