var b = 1
var c
var fibonacci = 0


for (a = 1; a <= 13; a++) {
    c = fibonacci;
    fibonacci = fibonacci + a;
    a = c;
    console.log(+fibonacci - a + '')
}
console.log();