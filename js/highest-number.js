
function getHighestNum(num){
    var arr = (""+num).split("");
    arr.sort(function(a, b){return b-a});
    return arr = arr.join("");
}

console.log(parseInt(getHighestNum(251)));
