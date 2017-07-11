function num_reverse(num){
    let rev = 0;
    let rem = 0;

    while(num > 0)
    {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = num / 10;
    }

    return rev;
}

console.log(num_reverse(122));
