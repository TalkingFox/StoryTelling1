import { Tv } from "./tv";

export class BackDrop extends Phaser.Scene {
  constructor() {
    super({
      key: "BackDrop"
    });
  }

  preload(): void {
    this.load.image("scene", "./assets/scene.png");
  }

  create(): void {
    this.add.image(400, 300, "scene");    
    const tv = new Tv();    
    this.scene.add('Tv', tv, true);
    this.scene.bringToTop('BackDrop');
  }
}
