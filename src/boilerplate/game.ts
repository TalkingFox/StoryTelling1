/// <reference path="../phaser.d.ts"/>

import "phaser";
import { BackDrop } from "./scenes/backdrop";

const config: GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: BackDrop,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  }
};

// game class
export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);    
  }
}

// when the page is loaded, create our game instance
window.onload = () => {
  var game = new Game(config);
};
