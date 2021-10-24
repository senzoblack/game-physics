var game;
window.onload=function() {
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'phaser-game',
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        scene: [SceneMain]
    };
    game =new Phaser.Game(config);
}
