function removeDups(arr){
	var nonDupsArr = [];
	for(var i=0; i<arr.length; i++){
		var element = arr[i];
		var duplicate = false;
		for(var j=0; j<nonDupsArr.length; j++){
			if(element == nonDupsArr[j]){
				duplicate = true;			
			}		
		}	
		if(duplicate === false){
			nonDupsArr.push(element);		
		}
	}
	return nonDupsArr;
}

var noDups = removeDups(['Mango', 'Guava', 'Apple', 'Mango', 'Apple']);
console.log(noDups);
