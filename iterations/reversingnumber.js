var n = 352, reverse = 0, remainder;

while (n>0) {
    remainder = n%10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
}

console.log(reverse);