function Mammal(name) {
    this.name = name;
    this.info = function(){
        return "The mammal name is: "+ this.name;
    }
}

Mammal.prototype.sound = 'Grrrrrr...';

console.dir(Mammal);

Mammal.prototype.makeSound = function () {
    return this.name+ " says "+ this.sound;
};

let tommy = new Mammal('Tommy');

console.log(tommy.makeSound());
