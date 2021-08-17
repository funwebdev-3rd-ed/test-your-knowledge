/* add code below this */

// array of bill totals
const billTotals = [50.00, 150.00, 20.00, 500.00];

function calculateTip(total) {

    // calculate tips based on this logic:
    //   if total < 30, then tip = 30%
    //   if total between 30 and 75, then tip = 20%
    //   if total > 75, then tip = 10%

    var tip;
    if (total < 30)
        tip = total * 0.30;
    else if (total >= 30 && total <= 75)
        tip = total * 0.20;
    else
        tip = total * 0.10;
    return tip;
}



// define new array called tips
const tips = [];    

// loop through totals
for (let total of billTotals) {
    // calculate tip amount
    let tip = calculateTip(total);
    
    // add tip amount to tips array
    tips.push(tip);

    // could combine the above two lines into a single line, e.g.,
    //     tips.push(calculateTip(total));
}
// output the tips array
for (let i=0; i < billTotals.length; i++) {
    console.log("For bill of $" + billTotals[i] + " the tip should be $" + tips[i]);
}





