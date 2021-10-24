class SceneMain extends Phaser.Scene{
    constructor(){
        super('SceneMain');
    }
    preload() {
        //load our images or sounds
        this.load.image('apple', 'images/apple.png');
        this.load.image('ground', 'images/ground.png');
    }
    create() {
        //define pur objects
        console.log(game);
        
        this.apple=this.physics.add.sprite(240,300,'apple'); //apple
        this.apple.setGravityY(200); //gravity
        this.ground=this.physics.add.sprite(240,600,'ground');//ground
        this.physics.add.collider(this.apple, this.ground); //collider
        this.ground.setImmovable(); //set immovable

        //set bounce effect
        this.apple.setBounce(0,0.5);//pass x & y
        this.input.on('pointerdown',this.moveApple,this);//velocity
    }
    moveApple() {
        this.apple.setVelocity(0, -100);
    }
    update() {
        //constant running loop
    }
}