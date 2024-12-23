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
    clearContent();
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
    'static/images/painting10.png',
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
    clearContent();
    addImages(paintingFilePaths, paintingDescriptions);
}

/*-----------------------------
life/anatomy/figure drawing page
-----------------------------*/
//add descriptions and paths to files to be included on this page
const lifeAnatomyDescriptions = [
    "Figure Study, Understanding the Terminus, Digital Sketch (Procreate).",
    "Gesture Study, Graphite.",
    "Portrait Studies, Graphite.",
    "Torso Studies, Graphite.",
    "Life Drawing 1, Graphite.",
    "Life Drawing 2, Graphite."
];

const lifeAnatomyFilePaths = [
    "static/images/figure1.png",
    "static/images/figure2.png",
    "static/images/figure3.png",
    "static/images/figure4.png",
    "static/images/figure5.png",
    "static/images/figure6.png"
];

function populateLifeAnatomy(){
    clearContent();
    addImages(lifeAnatomyFilePaths, lifeAnatomyDescriptions);
}

/*-----------------------------
video/animations page
-----------------------------*/
//add descriptions and paths to files to be included on this page
const videoDescriptions = [
    "Lamp Man, Digital Animation (procreate) for band promotion.",
    "Giant Walking Forward, Digital Animation (procreate) for Stereoscope video.",
    "Giant Running Sideways, Digital Animation (procreate) for Stereoscope video.",
    "Giant Family On The Run, Digital Animation (procreate) for Stereoscope video."
    //"Space Cowboy Sees Quetzalcoatl, Digital Animation (procreate), an animated short WIP."
];

const videoFilePaths = [
    'static/images/video1.gif',
    'static/images/video2.gif',
    'static/images/video3.gif',
    'static/images/video4.gif'
];

const youtubeDescriptions = [
    "i cannot fathom the image, Collaborative effort. This video was one of my first endeavors into multi-media art and art direction.",
    "Stereoscope, A music video directed by me for my band Arbordae's single of the same name."
];

const youtubeURLs = [
    'https://www.youtube.com/embed/z7moPtU4mNk?si=EfU1mwj-SY-Xgmu1',
    'https://www.youtube.com/embed/K1HJGX3DW5k?si=dbajQFo3SuPKLv1z'
];

function populateVideo(){
    clearContent();
    attachVideos(youtubeURLs, youtubeDescriptions);
    addImages(videoFilePaths, videoDescriptions);
}

/*-----------------------------
music page
-----------------------------*/
//add descriptions and paths to files to be included on this page
const musicDescriptions = [
    "Stereoscope Single Cover, Brush Pen & Photo Editing (Photoshop)",
    "Sense of Scene Single Cover, Oil Pastel & Photo Editing (Photoshop & Procreate)",
    "Honey Single Cover, Oil Pastel & Photo Editing (Photoshop & Procreate)",
    "Light Bearer T, Oil Pastel. A Graphic Design for an Arbordae T-Shirt.",
    "Window Bearer T, Oil Pastel. A Graphic Design for an Arbordae T-Shirt.",
    "Move The Old Way Tote, Photo Edit (Photoshop). A Graphic Design for an Arbordae Tote Bag.",
    "Stereoscope Promotion, Photo Edit (Photoshop). A Graphic used in single promotion for the song Stereoscope on social media.",
    "Flag Men Sticker, Digital Illustration (Procreate). A Graphic Design for an Arbordae Sticker."
    ];

const musicFilePaths = [
    'static/images/music1.JPG',
    'static/images/music2.png',
    'static/images/music3.png',
    'static/images/music4.JPG',
    'static/images/music5.JPG',
    'static/images/music6.png',
    'static/images/music7.PNG',
    'static/images/music8.png'
];

const musicURLs = [
    'https://www.youtube.com/embed/xJFuiLZeiOE?si=2D164cnQbnbDZ-Fv'
];

const musicVideosDescs = [
    'A live recording of original single, Wick, by Arbordae.'
];

function populateMusic(){
    clearContent();
    attachVideos(musicURLs, musicVideosDescs);
    addImages(musicFilePaths, musicDescriptions);
}

/*-----------------------------
other functions: adding and removing images
per page division. safe to ignore when
modifying page content. 
-----------------------------*/
function clearContent() {
    const contentDiv = document.getElementById('content');
    const images = contentDiv.getElementsByTagName('img'); 
    const descriptions = contentDiv.getElementsByTagName('p');
    const iframes = document.getElementsByTagName('iframe');
    while (images.length > 0) {
      images[0].remove();
    }
    while (descriptions.length > 0) {
        descriptions[0].remove();
    }
    while (iframes.length > 0){
        iframes[0].remove();
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
    imgElement.id = filename;
    contentDiv.appendChild(imgElement);

    // Create and append the description element
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = descriptions[index];
    //descriptionElement.style.textAlign = "center";
    contentDiv.appendChild(descriptionElement);
  });
  window.scrollTo(0,0);
}


function attachVideos(URLs, descriptions){
    const contentDiv = document.getElementById('content');

    URLs.forEach((url, index) => {
        // Create and append the iframe element
        const vidElement = document.createElement('iframe');
        vidElement.src = url;
        vidElement.alt = `Youtube Link: ${url}`;
        vidElement.classList.add('youtubePlayer');
        contentDiv.appendChild(vidElement);

        // Create and append the description element
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = descriptions[index];
        //descriptionElement.style.textAlign = "left";
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



  