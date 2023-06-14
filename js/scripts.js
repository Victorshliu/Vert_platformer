
const canvas = document.querySelector('canvas'); // Selects the canvas element
const ctx = canvas.getContext('2d'); // Creates a 2D drawing object
// establish canvas properties
canvas.width = 1024;
canvas.height = 640;
// Map Goal dimensions  1024x2560
const scaledCanvas = {
    width: canvas.width /1,
    height: canvas.height /1 ,
};

// establish gameworld properties
const gravity = 0.3;

const floorCollision2D = []
for (let i = 0; i < floorCollision.length; i += 8) {
    floorCollision2D.push(floorCollision.slice(i, i + 8))
};

const platformCollision2D = []
// create an array to store the platform collision data
// loop through the platform collision data
// check for a platform collision block
// if there is a platform collision block, create a new platform collision block object
// push the new platform collision block object into the platform collision array
for (let i=0; i < platformCollision.length; i += 8) {
    platformCollision2D.push(platformCollision.slice(i, i + 8))
};

// Setup an array to hold floor collision blocks
const collisionBlocks = []
// Loop through the floorCollision2D array
// Check for a collision block
// If there is a collision block, create a new collision block object
// Push the new collision block object into the collisionBlocks array
floorCollision2D.forEach((row, y) => {
    row.forEach((symbol, x) => { 
        if (symbol === 149) {
            console.log('collision block')
            collisionBlocks.push(
                new CollisionBlock({
                    position: {
                        x: x * 128,
                        y: y * 128,
                    },
                })
            )
        }
    })
});
console.log([collisionBlocks] )

const platformBlocks = []
// Loop through the platformCollision2D array
// Check for a platform collision block
// If there is a platform collision block, create a new collision block object
platformCollision2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 149) {
            console.log('platform block')
            platformBlocks.push(
                new PlatformBlock({
                    position: {
                        x: x * 128,
                        y: y * 128,
                    },
                })
            )
        }
    })
});


const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: 'media/tiledAssets/bg/map1.png',
})
// initialize player
    // player is initialized with target position
const player = new Player({
    position: {
        x: 100,
        y: 10
    }, 
    collisionBlocks,
    platformBlocks,
    imageSrc: 'media/playerSprites/Yellow/idle.png'
    
    })
// can be used to initialize a second player with different position
// const player2 = new Player({x: 200, y: 200})


// Create the game loop
function animate() {
    window.requestAnimationFrame(animate)
    // redraw the canvas
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height) // background
    // draw the player using class method of update() that also includes draw()
        // .save() and .restore() are used to save and restore the canvas state good for when you want to apply certain styles to certain objects without affecting other objects or constantly resetting the canvas  
    ctx.save()
        ctx.scale(1, 1)
        ctx.translate(0, -background.image.height + scaledCanvas.height)
        background.update()
        collisionBlocks.forEach(collisionBlocks => {
            collisionBlocks.update()
        })
        platformBlocks.forEach(platformBlocks => {
            platformBlocks.update()
        }) 
        player.update()
        player.velocity.x = 0
            if (keys.d.pressed) {
                player.velocity.x = 1,
                player.position.x = player.position.x + 5
            }
                else if (keys.a.pressed) {
                   player.velocity.x = -1
                     player.position.x = player.position.x - 5
                }
    ctx.restore()

   

   
}
const keys = {
    d: {pressed: false},
    a: {pressed: false},
    w: {pressed: false},
    space: {pressed: false},
    s: {pressed: false}
}
animate()

// Player Movement
    // Player movement is controlled by the keyboard
    // The keyboard is an event listener
    // The event listener is attached to the window object
    // The event listener is listening for a keydown event
    // The event listener is listening for a keyup event
window.addEventListener('keydown', (event) => {
    console.log(event.key) 
    // switch statement is used to check for multiple conditions
    // it is more efficient than using if/else statements because it is a single evaluation vs multiple evaluations in if/else
    switch  (event.key) {
        case 'ArrowUp': // up arrow
        case ' ': // spacebar
        case 'w': // w key
            player.velocity.y = -15
            keys.w.pressed = true
        break
        case 'ArrowRight': // right arrow
        case 'd': // d key
            keys.d.pressed = true
        break
        case 'ArrowLeft': // left arrow
        case 'a': // a key
           keys.a.pressed = true
        break
    }
}) 
window.addEventListener('keyup', (event) => {
    // switch statement is used to check for multiple conditions
    // it is more efficient than using if/else statements because it is a single evaluation vs multiple evaluations in if/else
    switch  (event.key) {
        case 'ArrowUp': // up arrow
        case ' ': // spacebar
        case 'w': // w key
            keys.w.pressed = false
        break
        case 'ArrowRight': // right arrow
        case 'd': // d key
            keys.d.pressed = false
        break
        case 'ArrowLeft': // left arrow
        case 'a': // a key
           keys.a.pressed = false
        break
    }
    //q: i want the players movement to be an 20px each button press?
    //a
}) 
// Image Sprites
    // Image sprites are used to create animations
    // Image sprites are used to create a single image from multiple images
    // Image sprites are used to reduce the number of server requests for images
    // object syntax was used so we could interact with different properties of the sprite

    //q: In the running example i am getting this error Uncaught DOMException: CanvasRenderingContext2D.drawImage: Passed-in image is "broken"
    //a: 

    console.log(floorCollision2D)