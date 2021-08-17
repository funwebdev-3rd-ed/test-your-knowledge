
const photos = JSON.parse(content);

const parent = document.querySelector('#parent');

for (let ph of photos) {
   let figure = document.createElement('figure');

   figure.appendChild( createImage(ph) );
   figure.appendChild( createCaption(ph) );

   parent.appendChild(figure);
}

function createImage(photo) {
   let image = document.createElement('img');
   image.setAttribute("src", `images/${photo.filename}`);
   image.setAttribute("alt", `${photo.title}`);
   return image;
}

function createCaption(photo) {
   let caption = document.createElement('figcaption');

   caption.appendChild( createHeader(photo) );
   caption.appendChild( createParagraph(photo) );

   createColorScheme(caption, photo);
   return caption;
}

function createColorScheme(caption, photo) {
   for (let c of photo.colors) {
      let span = document.createElement('span');
      span.style.backgroundColor = c.hex;
      caption.appendChild(span);
   } 
}

function createHeader(photo) {
   let h2 = document.createElement('h2');
   let h2Text = document.createTextNode(photo.title);
   h2.appendChild(h2Text);
   return h2;
}

function createParagraph(photo) {
   let p = document.createElement('p');
   let pText = document.createTextNode(photo.description);
   p.appendChild(pText);
   return p;
}