const canvas = document.querySelector('canvas'); // Selects the canvas element
const ctx = canvas.getContext('2d'); // Creates a 2D drawing object
// establish canvas properties
canvas.width = 1024;
canvas.height = 768;


// establish gameworld properties
const gravity = 0.3;
// Check the context of the canvas
console.log(ctx);

// Create Sprite Class
class Sprite { 
    // We use an Object in the constructor so that it is more descriptive and easier to read 
    constructor({position, imageSrc }) {
        this.position = position
        // Image() is a default method available in the javascript language
        this.image = new Image()
        this.image.src = imageSrc
        // this.size = {width, height}

    }
    draw() {
        // if prevents the image from being drawn before it is loaded 
        if (!this.image) return
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
    update() {
        this.draw()
    }
}
// Create Player Class
    // Some methods are predefined by the javascript language
    // Some methods are defined by the user
    // The constructor method is a special method for creating and initializing an object created with a class.
    // There can only be one special method with the name "constructor" in a class.
    // A constructor can use the super keyword to call the constructor of the super class.
    // If you do not specify a constructor method, a default constructor is used.
    // Classes always use strict.
    // Classes cannot contain properties. You can add properties by adding it to the constructor method:
    // The constructor method is called automatically when the object is initialized.
    // The constructor method is always called when the class is instanciated.
    // Method names defined by user can be any name, but the constructor method name is always "constructor".
    // However it is important to be consistent and descriptive with your naming conventions.
class Player {
// Contructor for the player
    constructor(position) {
        this.position = position,
        // velocity is the speed of the player this is used to simulate gravity
        this.velocity = {
            x: 1,
            y: 1,
        }
        this.height = 50,
        this.width = 50
    }
    //Player draw method and props
    draw() {
        ctx.fillStyle = 'green'
        // we can now use properties from the Player Object because we passed it in the constructor
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    // Player update method + draw method
    update() {
        this.draw()
        this.position.y += this.velocity.y 
        this.position.x += this.velocity.x
        this.velocity.y += gravity
            // conditional to check if player is on the ground and loses the game
            if (this.position.y + this.height + this.velocity.y < canvas.height)
                this.velocity.y += gravity
            else this.velocity.y = 0
            // conditional to check if player is hitting the sidewalls
            if (this.position.x + this.width + this.velocity.x > canvas.width || this.position.x < 0)
                this.velocity.x = 0
                 



    } 
}
const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: 'media/img/colored_grass.png',
    // size: {
    //     width: 1024,
    //     height: 768}
})
// initialize player
    // player is initialized with target position
const player = new Player({x: 100, y: 700})
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
    background.update() 
    player.update()
    player.velocity.x = 0
        if (keys.d.pressed) {
            player.velocity.x = 5
        }
            else if (keys.a.pressed) {
                player.velocity.x = -5
            }
    
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
            player.velocity.y = -10
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
    console.log(event.key) 
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
}) 
// Image Sprites
    // Image sprites are used to create animations
    // Image sprites are used to create a single image from multiple images
    // Image sprites are used to reduce the number of server requests for images
    // object syntax was used so we could interact with different properties of the sprite

    //q: In the running example i am getting this error Uncaught DOMException: CanvasRenderingContext2D.drawImage: Passed-in image is "broken"
    //a: 