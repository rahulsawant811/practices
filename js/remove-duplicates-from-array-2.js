function removeDups(arr){
	var nonDupsArr = [];
	for(var i=0; i<arr.length; i++){
		var element = arr[i];
		if(!nonDupsArr.includes(element)){
			nonDupsArr.push(element);		
		}
	}
	return nonDupsArr;
}

var noDups = removeDups(['Mango', 'Guava', 'Apple', 'Mango', 'Apple']);
console.log(noDups);
