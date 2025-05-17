# The Caesium Game
[play](http://z202305.space/projects/cs.html) (p.s. find the newest updates there)

This is an chemical-themed game ~~copying~~ inspired by the popular .io game [florr.io](https://florr.io). I used multiple (hundreds or thousands of) DOM elements to render the game, because JS canvas has a low resolution (btw now I know how to solve that, but then I'll have to rewrite thousands of lines of code). Here's an overview of the file structure:

```
cs.html     - This is the main HTML file. Run this file to play.
cs\
 |- game.css - The main css file, including all the styles of the elements
 |- game.js - The JS file containing all the game logics and rendering process.
 |- petals.js - The JS file containing the data of all the petals. (REALLY LONG).
 |- mobs.js - The JS file containing the data of all the mobs.
 |- maps.js - The JS file containing all the map data.
 |- achievements.js - All the achievements and tutorials in the game.
```

Note that the game was written in Chinese. You may need a translator if you want to play it in English.

If you diff the code with the version in the link above, you'll find the cloud save part is missing. In fact this is deliberate, because the login page and the MySQL database aren't in the file system.

Hope you have a happy game.
