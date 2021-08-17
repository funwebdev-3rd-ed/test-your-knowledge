// add class definition here (must be before you use it)
class GalleryItem {
   constructor(id, name) {
      this.id = id;
      this.name = name;
   }

   render() {
      let li = document.createElement('li');
      li.textContent = this.name;
      li.setAttribute('data-id', this.id);
      return li;
   }
}

// sample data using your class
const galleries = [
   new GalleryItem( 51,  "Albright-Knox Art Gallery" ),
   new GalleryItem( 18,  "Kunsthistorisches Museum"  ),
   new GalleryItem( 22,  "Belvedere Gallery"   ),  
   new GalleryItem( 42,  "Brooklyn Museum"   ),
   new GalleryItem( 27,  "J. Paul Getty Museum" ),
   new GalleryItem( 6,  "Metropolitan Museum of Art"  ),     
   new GalleryItem( 30,  "Rijksmuseum"  )
];

const getSampleGalleries = () => galleries;

export { GalleryItem, getSampleGalleries };