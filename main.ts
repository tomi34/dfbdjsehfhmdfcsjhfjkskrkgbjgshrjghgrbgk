input.onButtonPressed(Button.B, function () {
    sprite.move(-1)
    basic.pause(100)
    while (!(sprite.get(LedSpriteProperty.X) == 0)) {
        if (sprite.isTouching(sad)) {
            game.addScore(1)
            break;
        }
        sprite.change(LedSpriteProperty.X, -1)
        if (sprite.isTouching(sad)) {
            game.addScore(1)
            break;
        }
        basic.pause(200)
        if (sprite.isTouching(sad)) {
            game.addScore(1)
            break;
        }
        if (sprite.get(LedSpriteProperty.X) == 0) {
            game.removeLife(1)
        }
    }
    sprite.delete()
    sprite = game.createSprite(4, 2)
})
let sprite: game.LedSprite = null
let sad: game.LedSprite = null
sad = game.createSprite(1, 4)
sprite = game.createSprite(4, 2)
sad.set(LedSpriteProperty.Direction, 0)
game.setLife(10)
game.setScore(0)
basic.forever(function () {
    sad.move(1)
    sad.ifOnEdgeBounce()
    basic.pause(150)
})
