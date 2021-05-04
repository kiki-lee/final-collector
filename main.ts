info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 200)
    info.changeLifeBy(1)
    otherSprite.say("+1")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    info.changeLifeBy(-1)
})
let extraLife: Sprite = null
let myEnemy: Sprite = null
let projectile: Sprite = null
scene.setBackgroundColor(3)
let mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
info.startCountdown(15)
forever(function () {
    projectile = sprites.createProjectileFromSide(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, -90, 0)
    projectile.y = randint(0, 120)
    pause(randint(1000, 2000))
})
forever(function () {
    myEnemy = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . a b a a . . . . . . 
        . . . . . c b a f c a c . . . . 
        . . . . c b b b f f a c c . . . 
        . . . . b b f a b b a a c . . . 
        . . . . c b f f b a f c a . . . 
        . . . . . c a a c b b a . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -90, 0)
    myEnemy.y = randint(0, 120)
    myEnemy.setKind(SpriteKind.Enemy)
    pause(randint(1200, 2200))
})
forever(function () {
    extraLife = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c . . . . . c c c . . . 
        . c 2 2 2 c c . c c 2 2 2 c . . 
        . c 2 2 2 2 2 c 2 2 2 2 2 c . . 
        . c 2 2 2 2 2 2 2 2 2 2 2 c . . 
        . c 2 2 2 2 2 2 2 2 2 2 2 c . . 
        . c 2 2 2 2 2 2 2 2 2 2 2 c . . 
        . . c 2 2 2 2 2 2 2 2 2 c . . . 
        . . . c 2 2 2 2 2 2 2 c . . . . 
        . . . . c c 2 2 2 c c . . . . . 
        . . . . . . c 2 c . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -90, 0)
    extraLife.y = randint(0, 120)
    extraLife.setKind(SpriteKind.Food)
    pause(randint(4000, 5000))
})
