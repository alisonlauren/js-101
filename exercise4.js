// ## Tip Calculator

// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// > good -> 20%
// >
// > fair -> 15%
// >
// > bad -> 10%

// ```js
// tipAmount(100, 'good');
// // 20

// tipAmount(40, 'fair');
// // 6
// ```




function tipAmount(bill, level) {
        if (level === "bad") {
            bill += bill * .1 
            return "The total amount is" + " " + bill
        }
        else if (level == "good") {
            bill += bill * .15
            return "The total amount is" + " " + bill
        }
        else {
                (level == "excellent") 
                bill += bill * .2;
                return "The total amount is" + " " + bill
        }
}

console.log(tipAmount(100, "good"))


          
