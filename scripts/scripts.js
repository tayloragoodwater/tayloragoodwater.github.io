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
    "Description for image 1",
    "Description for image 2"
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
    "Description for image 1",
    "Description for image 2"
];

const paintingFilePaths = [

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
  