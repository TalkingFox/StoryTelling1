export class Tv extends Phaser.Scene {
    private player: Phaser.Physics.Arcade.Sprite;
    private counter: number = 0;

    constructor() {
        super({
            key: "Tv"
        });        
    }

    preload(): void{
        this.load.spritesheet('snail', './assets/snails.png', {frameWidth: 8, frameHeight: 8, margin: 2});
    }

    create(): void{        
        this.player = this.physics.add.sprite(0, 0, 'snail');
        this.player.setCollideWorldBounds(true);
        this.player.setGravity(0,0);
        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('snail', {start: 0, end: 1}),
            frameRate: 10,
            repeat: -1
        });
    }

    update(): void{
        this.counter++;
        if (this.counter % 250 === 0)
        {
            console.log(this.player.x);
            console.log(this.player.y);
        }        
        //this.player.anims.play('move', true);
        const cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown)      
        {               
            this.player.setVelocityX(-5);
            this.player.scaleX = -1;
            this.player.angle = 0;
        }
        else if (cursors.right.isDown)
        {
            this.player.setVelocityX(5);
            this.player.scaleX = 1;
            this.player.angle = 0;            
        }        
        else if (cursors.up.isDown)            
        {
            this.player.setVelocityY(-5);
            this.player.scaleX = 1;
            this.player.angle = -90;            
        }
        else if (cursors.down.isDown)
        {
            this.player.setVelocityY(5);
            this.player.scaleX = 1;
            this.player.angle = 90;
        }      
    }
}