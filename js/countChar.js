function countChar(str, letter){
    return str.split(letter).length-1;
}

console.log(countChar('Hi There, this is me', 'h'));
