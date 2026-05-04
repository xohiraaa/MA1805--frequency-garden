# MA1805--frequency-garden

https://xohiraaa.github.io/MA1805--frequency-garden/

Members- Hira Jehangir


Frequency Garden is a small tile-based game that I built in p5.js. It includes a fairy character navigating a fantasy environment that collects glowing orbs to unlock a door and move through levels. A key theme is perception and altered states, the concept of frequency represents shifts in how we experience environments. Another theme is fantasy and escapism. Due to this, my intention was to make the world feel slightly abstract and realistic which is also why I chose a fairy character and glowing elements-the player can engage with a more imaginative space. I completed all aspects of this project independently. 

*Gameplay and Structure*

I used a tile-based system whrre each level is a 10x10 grid and each tile has a different functions. The player navigates using WASD. There is a straightforward game loop: explore, collect, unlock and progress which links to Rules of Play by Salen & Zimmerman, where meaningful play interaction includes clear goals and feedback. The level system reinforces repetition, giving the player a sense of familiarity and a sense of progression through visual and spatial variation. 

*Visual Style and Atmosphere*

A big focus of the project was to create a distinct visual identity. I wanted the game to have a soft, psychedelic feel hence why I incorporated a dark background, glowing orbs and an aura around the player. The aura effect was created using loops and transparency, this was explored in class, so this was adapted to create an immersive effect. Although I initially planned to design all elements as detailed sprites, I did end up simplifying the orbs into basic shapes due to time constraints. However, this still works stylistically and keeps the visuals consistent. 

*Audio and Personal Production*

A key aspect of this project which I find really crucial is that I produced the music myself. I purposely used my own track instead of using one from online because I wanted the game to feel personal and original. The music complements the visual tone of my game as they’re both ambient and slightly atmospheric. Including my own music reflects a multidisciplinary approach as I combined coding, visual design and music creation into one piece. This also adds onto my game’s concept of shifting states of perception by utilising my own experiences with music showing how sound can alter mood, intensity and the way an environment is perceived. 

*Development Process and Problem Solving*

The development process did involve a lot of trial and error. E.g. I continuously encountered issues with assets not loading but I managed to resolve this by fixing incorrect file paths. I then decided to add a loading screen which improved debugging and usability. Another issue was when I tried duplicating levels: copying arrays directly caused bugs so I fixed this using JSON.parse(JSON,stringify()) , showing me how Javascript handles objects and memory in a more practical way. The frequency-switching feature was not directly covered in class, so I developed this independently by gaining a better understanding on variables and conditionals. I watched a tutorial that uses key input to change variables (https://youtu.be/4QAPqW9JlgY?si=sJ4QB9SFaPGjVCA6) and adapted this approach to create a toggle system that switches between visual states in my game. I also dealt with GitHub pages issues, when I clicked the link, the game did open but stayed stuck on a loading screen. I realised I needed to upload the actual folder named “assets” instead of individually uploading them as the folder paths were included in my code. 

*Inspiration*

The project was influenced by both games and theory. Super Mario Bros influenced the way I structured progression and item collection, while The Legend Of Zelda inspired the top-down exploration style. I was also inspired by Thomas Was Alone which shows how simple mechanics can still be engaging. For theory, I took ideas from Schell (2020) on player experience which contrasts to Salen & Zimmerman. Schell focuses on the emotional experience for the player. I included visually engaging elements (auras) and engaging audio to immerse the user while remaining simple. 

*Evaluation and Further Improvements*

Overall, the project demonstrates key programming concepts from the module like tilemaps, loops and conditionals. It also reflects independent problem-solving as I worked by myself and experimented beyond class material which I am quite proud of. If I were to develop this further, I would expand the frequency mechanic, so it affects the gameplay more directly, such as changing accessible paths. I would also improve asset detail if I had more time and create more levels. 


