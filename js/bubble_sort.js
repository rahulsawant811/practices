function bubbleSort(items) {
    var length = items.length;
    for (var i = 0; i < length; i++) {
        //Number of passes
        for (var j = 0; j < (length - i - 1); j++) {
            //Notice that j < (length - i)
            //Compare the adjacent positions
            if(items[j] > items[j+1]) {
                //Swap the numbers
                var tmp = items[j];
                //Temporary variable to hold the current number
                items[j] = items[j+1];
                //Replace current number with adjacent number
                items[j+1] = tmp;
                //Replace adjacent number with current number
            }
        }
    }

    return items;
}

let arr = [4,5,2,1,8];
console.log(bubbleSort(arr));

// find highest possible number
console.log(parseInt(bubbleSort(arr).reverse().join('')));

// Swap without using temp variable

/*
    let a = 5, b = 6

    a = a + b;  // 5 + 6 = 11
    b = a - b;  // 11 - 6 = 5
    a = a - b;  // 11 - 5 = 6
*/
