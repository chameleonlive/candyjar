var config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  transparent: true,
  parent: "phaser-example",
  physics: {
    default: "matter",
    matter: {
      debug: false,
      enableSleeping: true,
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
  scale: {
    mode: Phaser.Scale.FIT,
  },
};

var game = new Phaser.Game(config);

function preload() {
  // this.load.image("mountains", "/images/mountains-tile.png");
  this.load.spritesheet("baby_duck", "./images/baby_duck.png", {
    frameWidth: 69,
    frameHeight: 91,
  });
}

function create() {
  // this.add.image(0, 600, "mountains").setOrigin(0, 1);

  this.matter.world.setBounds(
    0,
    0,
    window.innerWidth,
    window.innerHeight,
    32,
    true,
    true,
    false,
    true
  );

  var path =
    "0 307 0 67 8 55 12 53 57 128 86 94 128 136 148 103 190 159 210 135 222 149 248 109 267 133 293 93 321 128 361 75 381 97 439 4 523 117 551 78 563 92 569 93 603 38 637 99 654 53 701 154 729 109 750 140 800 66 800 307";

  //var verts = this.matter.verts.v(path);

  //   this.matter.add.fromVertices(
  //     408,
  //     492,
  //     verts,
  //     { ignoreGravity: true },
  //     true,
  //     0.01,
  //     10
  //   );
}

function releaseBall(size = 0.5) {
  const ball = game.scene.keys.default.matter.add.image(
    Phaser.Math.Between(40, window.innerWidth - 40),
    -200,
    "baby_duck",
    { angle: Phaser.Math.FloatBetween(0, Math.PI * 2) }
  );

  ball.setCircle();
  ball.setBounce(Phaser.Math.FloatBetween(0.4, 0.6));
  ball.setScale(size);
  ball.setFriction(0.001);
  ball.setVelocityY(Phaser.Math.Between(0, 20));
}
