controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    PLAYER_ATK = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 . . . . . . . . . 
        . . . 3 3 . . . . . . . . . . . 
        . . . 3 . . . . . . . . . . . . 
        . . 3 . 3 . . 3 3 3 3 3 3 3 3 3 
        . . 3 3 . 3 3 . . . . . . . 3 . 
        . . 3 3 3 3 3 3 3 . . . . . 3 . 
        3 3 3 . 3 . . . . 3 3 . . . 3 . 
        3 . 3 3 . . . . . . . 3 . . 3 . 
        . 3 3 3 . . . . . . . . 3 . 3 . 
        . 3 3 . 3 . . . . . . . . 3 3 . 
        . 3 3 3 3 3 . . . . . . . 3 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . . 3 . . 3 3 3 3 3 3 . . . . 
        . . . . 3 . . . . . . . . . . . 
        `, PLYR, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(PLAYER_ATK)
    sprites.destroy(ENMY, effects.fire, 500)
    wave_number(1, ENMY)
})
function wave_number (WAVE: number, ENMY: Sprite) {
    if (sprites.allOfKind(SpriteKind.Enemy).length > 0) {
        game.splash("ENEMIES STILL ON MAP ")
    } else {
        game.splash("Wave Completed", WAVE)
        WAVE = WAVE + 1
        return WAVE
    }
    if (WAVE == WAVE_LIST.removeAt(0)) {
    	
    }
    return WAVE
}
function EnemySpawn (num: number) {
    for (let index = 0; index < num; index++) {
        ENMY = sprites.create(enemies._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnRandomTile(ENMY, sprites.castle.tilePath5)
    }
}
let ENMY: Sprite = null
let PLAYER_ATK: Sprite = null
let enemies: Image[] = []
let WAVE = 0
let PLYR: Sprite = null
let WAVE_LIST: number[] = []
let CALL_ = [3, 6, 9]
WAVE_LIST = [5, 10, 15]
PLYR = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......fd1111111f.......
    ......fdd1111111df......
    ......fddd111111df......
    ......fdddddd111df......
    ......fbddddbfd1df......
    ......fcbbbdcfddbf......
    .......fcbb11111f.......
    ........fffff1b1f.......
    ........fb111cfbf.......
    ........ffb1b1ff........
    ......f.fffbfbf.........
    ......ffffffff..........
    .......fffff............
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
scene.cameraFollowSprite(PLYR)
controller.moveSprite(PLYR)
WAVE = 1
tiles.setCurrentTilemap(tilemap`level1`)
enemies = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c c . . . 
    . . . . . . c 5 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c b b b b 1 b b c c . . 
    . . . . c 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 b b c c 
    . . c c d 1 1 1 b 1 b 1 5 5 5 c 
    . . c c d 1 c 1 1 1 b 1 b b 5 c 
    . c c d d 1 1 1 1 1 b 1 f b 5 c 
    f d d d 1 1 1 1 1 b b b f . c c 
    f f f f f 1 1 1 b b 5 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c . . . 
    . . . . . . . c c d d d d c . . 
    . . . . . c c c c c c d d c . . 
    . . . c c c 4 4 4 4 d c c c c c 
    . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
    . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
    f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
    f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
    f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
    . f 4 4 4 4 1 4 4 f 4 4 d f . . 
    . . f 4 4 1 4 c c 4 4 d f . . . 
    . . . f d 4 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `]
EnemySpawn(1)
