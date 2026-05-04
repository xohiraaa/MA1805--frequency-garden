// FREQUENCY GARDEN (FINAL)
// added game over + collectibles + MUSIC + start screen + frequency

// using tile system from week 4 (tilemaps)
// originally i was confused about tiles vs full images but realised each tile is just a 50x50 section

let tileSize = 50; // size of each tile 
let cols = 10;
let rows = 10;

// images
let grassImg, wallImg, doorImg, playerImg, orbImg;
let grassLoaded = false;
let wallLoaded = false;
let doorLoaded = false;
let playerLoaded = false;
let orbLoaded = false; // next time i will attempt a custom orb sprite 

// sound
let bgMusic;
let musicStarted = false; // needed because browser won’t autoplay audio (learned this after it kept not playing)

// game state
let gameOver = false;

// NEW: start screen (i realised game felt too basic just starting instantly)
let gameStarted = false;

// NEW: frequency system (not directly from class but built using conditionals + variables)
let frequency = 0; // 0 = normal, 1 = alternate

// collectibles
let collected = 0;
let totalOrbs = 3; // i chose 3 to keep gameplay simple but still interactive

// LEVELS

// using array based level system 
// 0 = floor, 1 = wall, 2 = door, 3 = collectible

let level0 = {
  map: [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,3,0,0,0,0,0,2,1],
    [1,0,0,0,0,0,0,3,0,1],
    [1,0,1,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,0,3,0,0,0,1,0,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  startCol: 1,
  startRow: 1
};

// duplicate idea for other levels
// I used JSON.parse(JSON.stringify()) because I didnt want to rewrite arrays manually
// originally I tried copying arrays directly but it caused weird reference bugs

let level1 = JSON.parse(JSON.stringify(level0));
let level2 = JSON.parse(JSON.stringify(level0));
let level3 = JSON.parse(JSON.stringify(level0));

let levels = [level0, level1, level2, level3];
let currentLevel = 0;
let mapData = levels[currentLevel].map;

// player
let player; // using object instead of class -more effective for me 

// UI
let showLevelText = false;
let levelTimer = 0;

function setup() {
  createCanvas(cols * tileSize, rows * tileSize); // canvas based on tile grid

  loadMyImages(); // load all assets

  resetPlayer(); // set starting position
}

function draw() {

  // NEW: start screen (i added this because it felt too beginner before)
  if (!gameStarted) {
    drawStartScreen();
    return;
  }

  // check for game over first so it overrides everything
  if (gameOver) {
    drawGameOver();
    return;
  }

  // loading screen 
  if (!grassLoaded || !wallLoaded || !doorLoaded || !playerLoaded) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Loading...", width/2, height/2);
    return;
  }

  // NEW: frequency based background (simple but makes it feel more like “states”)
  if (frequency === 0) {
    background(10, 5, 20);
  } else {
    background(5, 20, 40);
  }

  drawMap();
  drawPlayer();
  drawAura(); // visual effect (loops from class)
  drawUI();
}

// NEW: start screen visuals
// i used sin/cos because we did similar animation stuff 
function drawStartScreen() {

  background(0);

  // trippy background (i wanted something more “designed” instead of static)
  for (let i = 0; i < 20; i++) {
    let x = width/2 + sin(frameCount * 0.02 + i) * 100;
    let y = height/2 + cos(frameCount * 0.02 + i) * 100;

    fill(150 + i * 5, 100, 255, 40);
    noStroke();
    ellipse(x, y, 100 + i * 10);
  }

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(30);
  text("FREQUENCY GARDEN", width/2, height/2 - 60);

  textSize(14);
  text("Press ENTER to start", width/2, height/2);

  text("WASD to move", width/2, height/2 + 30);
  text("Press SPACE to change frequency", width/2, height/2 + 50);
}

function loadMyImages() {
  // i had issues with images not loading at first- paths must EXACTLY match 
  grassImg = loadImage("assets/grass.png", () => grassLoaded = true);
  wallImg = loadImage("assets/wall.png", () => wallLoaded = true);
  doorImg = loadImage("assets/door.png", () => doorLoaded = true);
  playerImg = loadImage("assets/player.png", () => playerLoaded = true);

  // added music after everything else was working (added last to avoid breaking project)
  bgMusic = loadSound("assets/hira.mp3");
}

function drawMap() {
  // nested loops 
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

      let tile = mapData[r][c];
      let x = c * tileSize;
      let y = r * tileSize;

      // floor
      if (tile === 0) image(grassImg, x, y, tileSize, tileSize);

      // wall (collision)
      else if (tile === 1) image(wallImg, x, y, tileSize, tileSize);

      // door (level progression)
      else if (tile === 2) {
        image(doorImg, x, y, tileSize, tileSize);

        // glow effect when unlocked (simple visual feedback)
        if (collected >= totalOrbs) {
          fill(255, 255, 100, 60);
          ellipse(x + 25, y + 25, 40);
        }
      }

      // collectible orb
      else if (tile === 3) {
        // originally wanted sprite but used ellipse for simplicity

        // orb changes colour depending on frequency (adds variation)
        if (frequency === 0) {
          fill(180, 120, 255);
        } else {
          fill(120, 255, 200);
        }

        ellipse(x + 25, y + 25, 20);
      }
    }
  }
}

function drawPlayer() {
  let x = player.col * tileSize;
  let y = player.row * tileSize;

  image(playerImg, x, y, tileSize, tileSize);
}

function drawAura() {
  // loop-based visual effect (inspired by  animation examples)
  let x = player.col * tileSize + 25;
  let y = player.row * tileSize + 25;

  for (let i = 0; i < 5; i++) {
    let size = 40 + i * 12;

    // NEW: aura changes with frequency (visual feedback)
    if (frequency === 0) {
      fill(200, 100, 255, 20);
    } else {
      fill(100, 255, 200, 20);
    }

    noStroke();
    ellipse(x, y, size);
  }
}

function drawUI() {

  fill(255);
  textAlign(CENTER, TOP);
  text("Level " + (currentLevel + 1), width/2, 10);

  textAlign(LEFT, TOP);
  text("Orbs: " + collected + "/" + totalOrbs, 10, 10);

  // instruction text
  if (collected < totalOrbs) {
    text("Collect all orbs to unlock door", 10, 30);
  }

  // level up feedback
  if (showLevelText) {
    textAlign(CENTER, CENTER);
    textSize(28);
    text("LEVEL UP", width/2, height/2);

    levelTimer++;
    if (levelTimer > 60) {
      showLevelText = false;
      levelTimer = 0;
    }
  }
}

function drawGameOver() {
  background(0);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("GAME OVER", width/2, height/2 - 20);

  textSize(16);
  text("You completed Frequency Garden", width/2, height/2 + 20);
}

function resetPlayer() {
  // resets player each level (i forgot this at first and player stayed in wrong place)
  player = {
    col: levels[currentLevel].startCol,
    row: levels[currentLevel].startRow
  };

  mapData = levels[currentLevel].map;
  collected = 0; // reset collectibles per level
}

function keyPressed() {

  // start game from menu
  if (!gameStarted && keyCode === ENTER) {
    gameStarted = true;
    return;
  }

  // start music on first key press (browser rule- this confused me at first)
  if (!musicStarted && bgMusic.isLoaded()) {
    bgMusic.setVolume(0.3);
    bgMusic.loop();
    musicStarted = true;
  }

  // NEW: frequency switch
  if (keyCode === 32) {
    frequency = (frequency + 1) % 2;
  }

  if (gameOver) return;

  let nextCol = player.col;
  let nextRow = player.row;

  // WASD controls (used keycodes from class)
  if (keyCode === 87) nextRow--;
  if (keyCode === 83) nextRow++;
  if (keyCode === 65) nextCol--;
  if (keyCode === 68) nextCol++;

  let nextTile = mapData[nextRow][nextCol];

  // collision
  if (nextTile === 1) return;

  // collect orb
  if (nextTile === 3) {
    collected++;
    mapData[nextRow][nextCol] = 0; // remove orb after collecting
  }

  // door logic
  if (nextTile === 2 && collected >= totalOrbs) {

    currentLevel++;

    if (currentLevel >= levels.length) {
      gameOver = true;
      return;
    }

    resetPlayer();
    showLevelText = true;
    return;
  }

  player.col = nextCol;
  player.row = nextRow;
}