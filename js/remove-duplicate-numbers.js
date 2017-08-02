
var arr = [1,2,3,3,4,3,2,5];

var unique = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})

console.log(unique);


