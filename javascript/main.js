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
    console.log(tracks);
  });
}
SoundCloudAPI.getTrack('artcell'); /* calling the object (so called function :'3) */



/* 3. Display the cards */





/* 4. Add to playlist and play */