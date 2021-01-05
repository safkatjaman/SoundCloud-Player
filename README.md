# SoundCloud-Player

Day - 1: 
We start by going through the SoundCloud documentation to find out how to use the API. As a developer, you should get comfortable reading documentation as you will be doing plenty of that in your coding career. We then connect our app to the API and start getting some data back after sending requests to the SoundCloud server.

🔥 Client_id: Important! 🔥
SoundCloud has temporarily stopped accepting new client IDs for developers to use their API. 

Not a problem.

Please use my client ID: 

client_id: 'cd9be64eeb32d1741c17cb39e41d254d'


Day - 2:
We refactor our code and wrap it in an object. Of course, we could wrap all our code in multiple functions, but after writing 10,000 lines of code you might be able to imagine how this could get sloppy. So instead, we'll use an object. In this lesson, we'll show you how!


Day - 3:
we'll start working towards making our app more dynamic. Previously, we created a static card in our app to show how a single track will be represented in the app. We refer to the little boxes that display our SoundCloud tracks as "cards". We are going to rebuild the HTML card, using only JavaScript so that we can loop through them in a later video.

We use the forEach() loop to loop through each object in the API, creating a card for each track. We then change the cards from using static content to using dynamic content grabbed from the API.
