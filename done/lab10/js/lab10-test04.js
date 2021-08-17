document.addEventListener("DOMContentLoaded", function() {

   const countryAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php';
   const continentAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';
   const userAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/users.php';
   const photoAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';   

   const loader1 = document.querySelector("#loader1");
   const loader2 = document.querySelector("#loader2");
   const button = document.querySelector("#fetchButton");
   const main = document.querySelector("main");
   const filters = document.querySelector("#filters");
   const selectCountry = document.querySelector("#countries");
   const selectCity = document.querySelector("#cities");
   const selectContinent = document.querySelector("#continents");
   const selectUser = document.querySelector("#users");   

   filters.style.display = "none"; 
   main.style.display = "none";   
   loader1.style.display = "none";
   loader2.style.display = "none";        

   button.addEventListener('click', displayFilters);


   /* -------------------------------------------------------------
      Retrieves asyncronously all the filter data
   */
   async function displayFilters() {
      button.style.display = "none"; 
      main.style.display = "none";   
      loader1.style.display = "block";

      // we want to do these four fetches simulataneously
      const continentPromise = fetch(continentAPI).then ( response => response.json() );
      const countryPromise = fetch(countryAPI).then ( response => response.json() );
      const cityPromise = fetch(cityAPI).then ( response => response.json() );
      const userPromise = fetch(userAPI).then ( response => response.json() );
      // but we want to wait until we have all four results
      const [continents, countries, cities, users] = await Promise.all( [continentPromise, countryPromise, cityPromise, userPromise] );

      // have all our data so turn off loading animation and show select elements
      loader1.style.display = "none";
      main.style.display = "block";
      filters.style.display = "block";    

      // now populate all four select elements with this data
      populateSelect(continents,selectContinent,'name','code','name');
      populateSelect(countries,selectCountry,'name','iso','name');
      populateSelect(cities,selectCity,'name','id','name');
      populateSelect(users,selectUser,'lastName','id','lastName');
   }

   /* -------------------------------------------------------------
      Populates the passed select with the passed data, using the 
      specified sort, value, and text property names
   */
   function populateSelect(data, select, sortField, valueField, textField) {
      const sorted = data.sort( (a,b) => a[sortField] < b[sortField] ? -1 : 1 );
      sorted.forEach( d => {
         const opt = document.createElement('option');
         opt.setAttribute('value', d[valueField] );
         opt.textContent = d[textField];
         select.appendChild(opt);
      });   
      select.addEventListener('input', loadPhotos);
   }


   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */
  async function loadPhotos(e) {

      // show second loader
      loader2.style.display = "block";
      // set up querystring based on which <select> was changed
      let querystring;
      if (e.target == selectContinent) querystring = 'continent';
      if (e.target == selectCountry) querystring = 'iso';
      if (e.target == selectCity) querystring = 'city';
      if (e.target == selectUser) querystring = 'user';

      // construct photo url with query string
      let url = photoAPI + '?' + querystring + '=' + e.target.value;
      // wait for data
      const response = await fetch(url);
      const photos = await response.json();

      // hide loader
      loader2.style.display = "none"; 
      // remove old photos 
      results.innerHTML = '';
      // display the photos
      photos.forEach( p => {
         const img = document.createElement('img');
         img.src = imageURL + p.filename;
         img.title = p.title;
         img.alt = p.title;

         results.appendChild(img);
      });
      // reset all but the current select back to default
      resetSelects(e.target);

   }

   /* -------------------------------------------------------------
      Reset all but the current select back to default
   */
   function resetSelects(current) {
      if (current != selectContinent) selectContinent.value = 0;
      if (current != selectCountry) selectCountry.value = 0;
      if (current != selectCity) selectCity.value = 0;
      if (current != selectUser) selectUser.value = 0;      
   }
});