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
