/* 1. Search  */







/* 2. Query SoundCloud API */
var SoundCloudAPI = {}; /* Using this object to wrap our code */ /* console.log(typeof(soundCloudAPI)); */



/* API key initialization */
SoundCloudAPI.init = function() {
  SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  });
}
SoundCloudAPI.init(); /* calling the object (so called function) */



/* getting the track */
SoundCloudAPI.getTrack = function (inputValue) {
  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', {
    q: inputValue
  }).then(function(tracks) {
    /* console.log(tracks); */
    SoundCloudAPI.renderTracks(tracks); /* calling the object (so called function :'3) */
  });
}
SoundCloudAPI.getTrack('linkin park'); /* calling the object (so called function :'3) */



SoundCloudAPI.renderTracks = function (tracks) {

/* Making Cards Start */

tracks.forEach(function (track) {

console.log(track);
/* Main Div Start */
  var card = document.createElement('div');
  card.classList.add('card');

  var searchResults = document.querySelector('.js-search-results');
/* Main Div End */


/* Image Div Start */
  var imageDiv = document.createElement('div');
  imageDiv.classList.add('image');

  var image = document.createElement('img');
  image.classList.add('image-img');
  image.setAttribute('id', 'image-css');
  image.setAttribute('src', track.artwork_url || 'styles/themes/default/assets/images/SD Player logo.png');
/* Image Div End */


/* Header Div Start */
  var contentDiv = document.createElement('div');
  contentDiv.classList.add('content');

  var headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  var linkHeader = document.createElement('a');
  linkHeader.setAttribute('href', track.permalink_url);
  linkHeader.setAttribute('target', '_blank');
  linkHeader.innerHTML = track.title;
/* Header Div End */


/* Button Div Start */
  var buttonDiv = document.createElement('div');
  buttonDiv.classList.add('ui');
  buttonDiv.classList.add('bottom');
  buttonDiv.classList.add('attached');
  buttonDiv.classList.add('button');
  buttonDiv.classList.add('js-button');

  var icon = document.createElement('i');
  icon.classList.add('add');
  icon.classList.add('icon');

  var span = document.createElement('span');
  span.innerHTML = "Add to playlist";
/* Button Div End */


/* Append Child Start */
  card.appendChild(image);
  card.appendChild(contentDiv);
  card.appendChild(buttonDiv);

  headerDiv.appendChild(linkHeader);

  contentDiv.appendChild(headerDiv);

  buttonDiv.appendChild(icon);
  buttonDiv.appendChild(span);

  searchResults.appendChild(card);
/* Append Child End */

});

/* Make Cards End */
}



/* 3. Display the cards */





/* 4. Add to playlist and play */