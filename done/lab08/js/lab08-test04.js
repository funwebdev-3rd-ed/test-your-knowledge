/* helpful functions for arrays  */

// convert comma-separated values into an array
let countries = csv.split(',');
console.log(countries);

// convert array into delimited string
let strCountries = countries.join(';');
console.log(strCountries);

// check if these are arrays
console.log(Array.isArray(countries), Array.isArray(strCountries))

//  sort a simple array 
countries.sort();
console.log(countries);

// reverse the sort
countries.reverse();
console.log(countries);

// remove the first element
countries.shift();
console.log(countries);

// remove the last element
countries.pop();
console.log(countries);

// add new elements to the front of the array
countries.unshift("Ghana","Japan");
console.log(countries);

// search for element
let found = countries.includes("Germany");
console.log(found);

// search for element index
let indx = countries.indexOf("Germany");
console.log(indx);

// make a new array by extracting from another array
const europe = countries.splice(2,3);
console.log(europe);
console.log(countries);

console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for (let c of cities) {
   if (c.continent === "NA") console.log(c.city);
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let g of galleries) {
   if (g.location.country === "USA") console.log(g.name);
}

console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for (let c of colors) {
   if (c.luminance < 75) console.log(c.name);
}

console.log('---------------------');

// use two nested loops - outer: loop thru colors
for (let c of colors) {
   // inner: loop thru rgb and sum values
   let sum = 0;
   for (let rgb of c.rgb) sum += rgb;
   // output color name and sum using template literal
   console.log(`${c.name} rgb=${sum}`);
}

console.log('---------------------');

// use a loop output using document.write a unordered
// list of links to the galleries in the galleries array.
// Make the label of the link the name property, and the href
// the url property

document.write('<ul>');
for (let g of galleries) {
   document.write(`<li><a href=${g.url}>${g.name}</a></li>`);
}
document.write('</ul>');


