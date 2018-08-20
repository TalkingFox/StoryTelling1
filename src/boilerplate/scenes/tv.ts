export class Tv extends Phaser.Scene {
    private player: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super({
            key: "Tv"
        });        
    }

    preload(): void{
        this.load.spritesheet('snail', './assets/snails.png', {frameWidth: 8, frameHeight: 8, margin: 2});
        this.load.tilemapTiledJSON('mario', './assets/super_mario.json');
        this.load.image('tiles', './assets/super_mario.png');
    }

    create(): void{
        const map = this.add.tilemap('mario');
        const tileset = map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
        const layer = map.createStaticLayer('World1', tileset);        
        this.physics.world.setBounds(0,0,layer.width,layer.height);
        this.player = this.physics.add.sprite(0, 0, 'snail');        
        this.player.setCollideWorldBounds(true);
        this.player.setGravity(0,0);
        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('snail', {start: 0, end: 1}),
            frameRate: 10,
            repeat: -1
        });
        this.cameras.main.setViewport(140,25,256,256);
        this.cameras.main.startFollow(this.player);
        
    }

    update(): void{
        //this.player.anims.play('move', true);
        const cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown)      
        {               
            this.player.setVelocityX(-25);
            this.player.scaleX = -1;
            this.player.angle = 0;
        }
        else if (cursors.right.isDown)
        {
            this.player.setVelocityX(25);
            this.player.scaleX = 1;
            this.player.angle = 0;            
        }        
        else if (cursors.up.isDown)            
        {
            this.player.setVelocityY(-25);
            this.player.scaleX = 1;
            this.player.angle = -90;            
        }
        else if (cursors.down.isDown)
        {
            this.player.setVelocityY(25);
            this.player.scaleX = 1;
            this.player.angle = 90;
        }      
    }
}