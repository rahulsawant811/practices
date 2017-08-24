// dog Object
let dog = {
    sound: 'Woff',
    talk: function(){
        console.log(this.sound);
    }
}

dog.talk(); // "Woff"

let talkFunc = dog.talk;

talkFunc(); // "undefined"

let boundFunc = talkFunc.bind(dog)

boundFunc(); // "Woff"

// Real life example:

let btn = document.getElementById("button");

btn.addEventListener('click', dog.talk.bind(dog)); // "Woff"
