/* add code below this */

//var bill = prompt("What is the bill total?");
//var iBill = Number(bill);



//if (iBill && iBill != 0) {

//const TIP_PERCENTAGE = 0.10;

// array of bill totals
const billTotals = [50.00, 150.00, 20.00, 500.00];

// calculate tips based on this logic:
//   if total < 30, then tip = 30%
//   if total between 30 and 75, then tip = 20%
//   if total > 75, then tip = 10%

// define new array called tips
const tips = [];    

// loop through totals
for (let total of billTotals) {
    // calculate tip amount
    let tip;
    if (total < 30)
        tip = total * 0.30;
    else if (total >= 30 && total <= 75)
        tip = total * 0.20;
    else
        tip = total * 0.10;
    
    // add tip amount to tips array
    tips.push(tip);
}
// output the tips array
for (let i=0; i < billTotals.length; i++) {
    console.log("For bill of $" + billTotals[i] + " the tip should be $" + tips[i]);
}

    
//
//} else {
//    console.log(`${bill} is not a valid number`);
//}




