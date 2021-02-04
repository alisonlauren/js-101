function lvl4exercise1() {
    // Return the boolean value "true"
    const myValue = true;
    return myValue
}
console.log(lvl4exercise1())

function lvl4exercise2() {
    // Return the boolean value "false"
    const myValue2 = false;
    return myValue2
}
console.log(lvl4exercise2())

function lvl4exercise3(bool) {
    // Return the opposite of the input boolean value
    var bool = !bool;
    return bool;   
}
console.log(lvl4exercise3(true))
console.log(lvl4exercise3(false))


function lvl4exercise4(bool1, bool2) {
    // Return the logical "and" of the input boolean values
    return bool1 && bool2;
}

function lvl4exercise5(bool1, bool2) {
    // Return the logical "or" of the input boolean values
    return bool1 || bool2;
}

function lvl4exercise6(bool1, bool2) {
    // Return the logical "equivalence" of the input boolean values
    return bool1 === bool2;

}