# MA1805--frequency-garden

*Concept*

Frequency Garden is a small tile-based game built in p5.js, it includes a  fairy character moving through a fantasy environment. The player then collects glowing orbs to unlock a door and move through levels. 
The idea behind the game originally came from the concept of frequency as a shifting state of perception, so my intention was to make the world feel slightly abstract instead of realistic. This is why I chose a fairy character and glowing elements. I completed all aspects of this project independently, including the coding, visual design and music production.

*Gameplay and Structure*

The game is built using a tile-based system where each level is a 10x10 grid. Each tile represents a specific function: floor, wall, door, or collectible, and the player navigates using WASD controls. 
The core game loop is straightforward: to explore, collect ,unlock and progress. This links to ideas discussed in Rules of Play by Salen & Zimmerman, 2003, where meaningful play interaction involves clear goals and feedback. The level system reinforces repetition while but still gives a sense of progression through visual and spatial variation; i wanted to make the game engaging for the player.

*Visual Style and Atmosphere*

A big focus of the project was to create a distinct visual identity. The dark background, glowing orbs and aura around the player were designed to give a soft, psychedelic feel. the aura effect was created using loops and transparency, which we explored in class and I adapted this to create an immersive effect.
Although I initially planned to design all elements as detailed sprites, I did simplify the orbs into basic shapes due to time constraints. However this still works stylistically and keeps the visuals consistent.

*Audio and Personal Production*

A key aspect of this project is that I produced the background music myself. I purposely used my own track instead of sourcing external audio because I wanted the game to feel more personal and original. The music is ambient and slightly atmospheric which complements the visual tone of my game. Including my own production also reflects a multidisciplinary approach, which combines coding, visual design and music creation into one piece. This also adds onto my game’s idea of shifting states of perception by drawing on my own experiences with music.

*Development Process and Problem Solving*

The development process involved a lot of trial and error. One of my initial misunderstandings was how tilemaps work,i originally thought of tiles as full and not repeated grid units. Through applying Week 4 material, I learned how to construct environments using nested loops and tile arrays.
I also continuously encountered issues with assets not loading, I managed to resolve this by fixing incorrect file paths. This led me to add a loading screen, which improved both debugging and usability. Another issue was when I tried duplicating levels. Copying arrays directly caused reference bugs, which I fixed using JSON.parse(JSON.stringify()) this showed me how JavaScript handles objects and memory in a more practical way.
The frequency-switching feature was not directly covered in class. I developed this independently by extending my understanding of variables and conditionals by watching online tutorials to include a system that switches states.

*Influences and Inspiration*

The project was influenced by both games and theory. Super Mario Bros inspired the level progression structure and collecting items, while The Legend of Zelda influenced the top-down exploration. I was also inspired by Thomas Was Alone, which shows how simple mechanics can still create engaging gameplay.
For theory, i took  ideas from Schell (2020) on player experience and interaction which helped with the design decisions, particularly around feedback and simplicity.

*Evaluation and Future Improvements*

Overall, the project demonstrates key programming concepts from the module, including tilemaps, loops, conditionals and state management. It also reflects independent problem-solving as i worked by myself and experimentation beyond class material.
If I were to develop this further, I would expand the frequency mechanic so that it affects gameplay more directly, such as altering accessible paths or changing tile behaviour. I would also improve asset detail and create more varied level designs if I had more time

