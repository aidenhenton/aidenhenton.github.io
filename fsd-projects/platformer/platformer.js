$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    
    createPlatform(0, 650, 300, 100, "#35a7ff");
    createPlatform(400, 560, 200, 300, "#ffd166");
    createPlatform(600, 470, 180, 600, "#ffd166");
    createPlatform(900, 380, 700, 30, "#06d6a0");
    createPlatform(840, 520, 700, 3000, "#06d6a0");
    createPlatform(1200, 380, 700, 3000, "#06d6a0");
    createPlatform(1080, 200, 180, 30, "#ef476f");
    createPlatform(460, 250, 140, 30, "#9b5de5");

    // TODO 3 - Create Collectables
  createCollectable("food", 1150, 450);
  createCollectable("steve", 1350, 50);
  createCollectable("diamond", 1150, 1, 0.5, 0.7);
  createCollectable("database", 500, 400, 0.5, 0.7);
  createCollectable("drink", 510, 148, 0.5, 0.7);
    // TODO 4 - Create Cannons
  createCannon("left", 400, 15000, 4000, 20000)
  createCannon("right", 900, 100, 4000, 200)
  createCannon("right", 800, 5000, 600, 150)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
