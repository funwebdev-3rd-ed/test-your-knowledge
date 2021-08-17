

document.addEventListener("DOMContentLoaded", function() {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';

   const loader1 = document.querySelector("#loader1");
   const loader2 = document.querySelector("#loader2");
   const main = document.querySelector("main");
   const results = document.querySelector("#results");
   const select = document.querySelector("#countries");
   const button = document.querySelector("#fetchButton");

   // first hide loaders and main element 
   main.style.display = "none";
   loader1.style.display = "none";  
   loader2.style.display = "none";   
   // then handle button click 
   button.addEventListener('click', loadFilters);


   /* -------------------------------------------------------------
      When button is clicked, fetch data and populate select element 
   */
   function loadFilters() {
      // display loader
      main.style.display = "none";
      loader1.style.display = "block";

      fetch(countryAPI)
         .then( resp => resp.json() )
         .then( countries => {
            // got data so hide loader and show main area
            main.style.display = "block";
            loader1.style.display = "none";  
            // in case user clicks button repeatedly, empty select first
            select.innerHTML = "";    
            // add an instructional option 
            select.appendChild( createOption("Select a country","") );
            // add received countries to select      
            countries.forEach( c => {
               select.appendChild( createOption(c.name,c.iso) );
            });
            // add a listener to the select
            select.addEventListener('input', loadPhotos);

         });

      function createOption(label, value) {
         const opt = document.createElement('option');
         opt.textContent = label;
         opt.setAttribute('value', value );
         return opt;
      }
   }

   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */
   function loadPhotos() {
      // if no country value provided, then exit
      if (select.value == "") return;

      // show second loader
      loader2.style.display = "block";
      
      // images api takes country iso
      let url = photoAPI + '?iso=' + select.value;
      fetch(url)
         .then( resp => resp.json() )
         .then( photos => {
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
            })
         });

   }


});