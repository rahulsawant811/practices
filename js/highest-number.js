
function getHighestNum(num){
    return arr = (""+num).split("").sort(
        function(a, b){
            return b-a
        }
    ).join("");
}

console.log(parseInt(getHighestNum(535)));
