/*-----------------------------
instructions: if modifying page contents,
use description string arrays to fill in text
content that will be beneath images. must be in same
order as file paths are listed. 
images will be placed in static/images/. 
for example, the first painting jpeg will be
static/images/painting1.jpeg
index page will include all photos in the static/images 
folder
sorry that the process has to be so annoying, these
are the pains of a static website :(
-----------------------------*/

/*-----------------------------
concepts/design page
-----------------------------*/
//add descriptions and paths to files to be included on this page
const conceptsDescriptions = [
    "An original and fundamental ideation for a video game project called Sleeping Giant",
    "A closer look at the main charcter, Quasi",
    "Enemy concepts for Sleeping Giant",
    "3D model Of Quasi's head (front view)",
    "(back view)",
    "Backdrop and ingredient designs for original tabletop card game, Spellbound",
    "The entire deck for Spellbound"
];

const conceptsFilePaths = [
    "static/images/concept1.png",
    "static/images/concept2.png",
    "static/images/concept3.png",
    "static/images/concept4.png",
    "static/images/concept5.png",
    "static/images/concept6.png",
    "static/images/concept7.png",
];

function populateConcepts(){
    removeImages();
    addImages(conceptsFilePaths, conceptsDescriptions);
}

/*-----------------------------
painting page
-----------------------------*/
//add descriptions and paths to files to be included on this page
const paintingDescriptions = [
    "When Strangers Meet, digital painting (Procreate)",
    "That Sinking Feeling, digital painting (Procreate)",
    "The Glass is Full, digital painting (Heavypaint)",
    "Caught in the Act of Desperation, digital painting (Procreate)",
    "In the hands of Love, digital illustration (Procreate)",
    "Finding it getting closer, digital painting (Heavypaint)",
    "Self Portrait in Blue, Oil Pastel",
    "Fingerpainting of Party Man, digital painting (Heavypaint)",
    "Haven't Much Left to See, Oil Pastel",
    "Rags to Riches, Oil Pastel & Photo Editing (Photoshop)",
    "Still Left Up to You, Oil Pastel & Photo Editing (Photoshop)",
    "Peace With My Brothers & Sisters (Breakthrough Into Your Whipping Wings), Oil pastel",
    "Ideas Left Untold, Oil Pastel",
    "Sick as Dog, Oil Pastel",
    "Dragging the Monkey All Around, Oil Pastel",
    "Wild Combination, Oil Pastel",
    "City Lights & Participants, Oil Pastel",
    "The Incessant Whirring of Its Waking Wings, Oil Pastel"
];

const paintingFilePaths = [
    'static/images/painting1.png',
    'static/images/painting2.JPG',
    'static/images/painting3.png',
    'static/images/painting4.png',
    'static/images/painting5.png',
    'static/images/painting6.jpg',
    'static/images/painting7.jpg',
    'static/images/painting8.jpg',
    'static/images/painting9.png',
    'static/images/painting10.jpg',
    'static/images/painting11.png',
    'static/images/painting12.jpg',
    'static/images/painting13.jpg',
    'static/images/painting14.jpg',
    'static/images/painting15.png',
    'static/images/painting16.jpg',
    'static/images/painting17.jpg',
    'static/images/painting18.jpg',
];

function populatePainting(){
    removeImages();
    addImages(paintingFilePaths, paintingDescriptions);
}

/*-----------------------------
life/anatomy/figure drawing page
-----------------------------*/
//add descriptions and paths to files to be included on this page
const lifeAnatomyDescriptions = [
    "Description for image 1",
    "Description for image 2"
];

const lifeAnatomyFilePaths = [

];

function populateLifeAnatomy(){
    removeImages();
    addImages(lifeAnatomyFilePaths, lifeAnatomyDescriptions);
}

/*-----------------------------
video/animations page
-----------------------------*/
//add descriptions and paths to files to be included on this page
const videoDescriptions = [
    "Description for image 1",
    "Description for image 2"
];

const videoFilePaths = [

];

function populateVideo(){
    removeImages();
    addImages(videoFilePaths, videoDescriptions);
}

/*-----------------------------
music page
-----------------------------*/
//add descriptions and paths to files to be included on this page
const musicDescriptions = [
    "Description for image 1",
    "Description for image 2"
];

const musicFilePaths = [

];

function populateMusic(){
    removeImages();
    addImages(musicFilePaths, musicDescriptions);
}

/*-----------------------------
other functions: adding and removing images
per page division. safe to ignore when
modifying page content. 
-----------------------------*/
function removeImages() {
    const contentDiv = document.getElementById('content');
    const images = contentDiv.getElementsByTagName('img'); 
    const descriptions = contentDiv.getElementsByTagName('p');
    while (images.length > 0) {
      images[0].remove();
    }
    while (descriptions.length > 0) {
        descriptions[0].remove();
      }
  }

function addImages(imageFilePaths, descriptions){
  const contentDiv = document.getElementById('content');

  imageFilePaths.forEach((filename, index) => {
    // Create and append the image element
    const imgElement = document.createElement('img');
    imgElement.src = filename;
    imgElement.alt = `Image: ${filename}`;
    imgElement.className = "page-img";
    contentDiv.appendChild(imgElement);

    // Create and append the description element
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = descriptions[index];
    descriptionElement.style.textAlign = "center";
    contentDiv.appendChild(descriptionElement);
  });
}

//modal functions **ignore me**
function openModal(image) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = image.src;
    
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }
  
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none'; // Hide the modal
  }
  