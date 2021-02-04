function lvl3exercise1() {
    // Create a "hello" and a "world", return the concatenation of the two
    return "hello" + " " + "world"
}
console.log(lvl3exercise1())

function lvl3exercise2() {
    // Create a "hello" and a 12, return the concatenation of the two
    return "hello" + " " + 12
}
console.log(lvl3exercise2())

function lvl3exercise3() {
    // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
    const twelve = 12
    return "'" + twelve + "'"   
}
console.log(lvl3exercise3())

function lvl3exercise4() {
    // Create a "hello world!" string. Return the length of the string
    const string = "hello world";
    return string.length;
}
console.log(lvl3exercise4())

function lvl3exercise5() {
    // Create a "hello world!" string. Return the index of the word "world".
    const myString = "hello world";
    return myString.slice(6,11)
}
console.log(lvl3exercise5())
