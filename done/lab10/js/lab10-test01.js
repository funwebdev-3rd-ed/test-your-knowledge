const stocks = [ 
   {symbol: "AMZN", name: "Amazon", price: 23.67, units: 59}, 
   {symbol: "AMT", name: "American Tower", price: 11.22, units: 10}, 
   {symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100}, 
   {symbol: "APPL", name: "Amazon", price: 234.00, units: 59}, 
   {symbol: "AWK", name: "American Water", price: 100.00, units: 10}
 ];

// your solutions here

// #1 Add a new function property named total() to each stock object

/*  for (let i=0; i<stocks.length; i++) {
   stocks[i].total = function () { 
     return this.price * this.units ;
    };
 } */

for (let s of stocks) {
  s.total = function () { 
    return this.price * this.units ;
   };
}
stocks.forEach( (s) => {console.log(s.total())});

// #2 - Find the first element whose symbol name is "CAT" (using loop then find)

let foundStock1;
for (let s of stocks) {
  if (s.symbol === "CAT") foundStock1 = s;
}
console.log(foundStock1);

const foundStock2 = stocks.find( s => s.symbol === "CAT");
console.log(foundStock2);

// #3 - Create a new array that contains stocks whose price is between $0 and $20 (using loop then filter)

let cheap1 = [];
for (let s of stocks) {
  if (s.price > 0 && s.price < 20) cheap1.push(s)
}
console.dir(cheap1);

const cheap2 = stocks.filter( s => s.price > 0 && s.price < 20);
console.dir(cheap2);

// #4 - Create a new array of strings with <li> elements containing the stock name property (using loop then map)

let list1 = [];
for (let s of stocks) {
  list1.push("<li>" + s.name + "</li>");
}
console.dir(list1);

const list2 = stocks.map( s => "<li>" + s.name + "</li>");
console.dir(list2);

// #5 - Sort the array of stocks on symbol

const sorted = stocks.sort( (a,b) => a.symbol < b.symbol ? -1 : 1);
console.dir(sorted);