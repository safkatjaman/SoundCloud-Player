/* 1. Search  */




/* 2. Query SoundCloud API */
SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {
  q: 'artcell'
}).then(function(tracks) {
  console.log(tracks);
});



/* 3. Display the cards */





/* 4. Add to playlist and play */