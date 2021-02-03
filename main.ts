namespace SpriteKind {
    export const ground = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile12`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 f 2 2 2 f 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    false
    )
    if (is_grounded == 1) {
        mySprite.setVelocity(0, -40)
        jump_times += 1
    } else {
        if (jump_times < 2) {
            mySprite.setVelocity(0, -31)
            jump_times += 1
        } else {
        	
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . . . . . . . 
        `],
    150,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        `],
    150,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 f 2 f 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        `],
    150,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 f 2 f 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 2 . . . . . . . . . . 
        `],
    150,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 50, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile13`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
})
let Hitting_wall_right = 0
let Hitting_wall_left = 0
let jump_times = 0
let is_grounded = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 f 2 2 f 2 2 . . 
    . . 2 2 2 2 2 2 f 2 2 f 2 2 . . 
    . . 2 2 2 2 2 2 f 2 2 f 2 2 . . 
    . . 2 2 2 2 2 2 f 2 2 f 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 50, 0)
game.onUpdate(function () {
    console.log("Is_grounded =" + is_grounded)
    console.log("jump_times =" + jump_times)
    console.log("Hitting_wall_left = " + Hitting_wall_left)
    console.log("Hitting_wall_right =" + jump_times)
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        is_grounded = 1
    } else {
        is_grounded = 0
    }
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        Hitting_wall_left = 1
        Hitting_wall_right = 0
        if (Hitting_wall_left == 1) {
            mySprite.vy += -0.5
        }
        jump_times = 1
    } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
        Hitting_wall_left = 0
        Hitting_wall_right = 1
        if (Hitting_wall_right == 1) {
            mySprite.vy += -0.5
        }
        jump_times = 1
    } else {
        Hitting_wall_right = 0
        Hitting_wall_left = 0
        mySprite.vy += 2
    }
    if (is_grounded == 1) {
        Hitting_wall_left = 0
        Hitting_wall_right = 0
        if ((Hitting_wall_left && Hitting_wall_right) == 0) {
            mySprite.ax = 0
        }
        jump_times = 0
    }
})
