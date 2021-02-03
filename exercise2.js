// ## Hello, you! Part 2

// Modify your hello program such that if no name is given: hello(), 
// it will print "Hello, world!", otherwise it behaves the same as previously.


function hello(name) {
    if (name){
        return "Hello" + " " + name;          
    }else {
        return "Hello Wordl";
    }
}
console.log(hello("Alison"))
console.log(hello(""))

