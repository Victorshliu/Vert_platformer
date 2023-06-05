const canvas = document.querySelector('canvas'); // Selects the canvas element
const ctx = canvas.getContext('2d'); // Creates a 2D drawing object
// establish canvas properties
canvas.width = 1024;
canvas.height = 768;
// establish gameworld properties
const gravity = 0.3;
// Check the context of the canvas
console.log(ctx);

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
    //
    constructor(position) {
        this.position = position
        // velocity is the speed of the player this is used to simulate gravity
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 50
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


    } 
}

// initialize player
    // player is initialized with target position
const player = new Player({x: 100, y: 100})
// can be used to initialize a second player with different position
// const player2 = new Player({x: 200, y: 200})
// Create the game loop
function animate() {
    window.requestAnimationFrame(animate)
    // redraw the canvas
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height) // background
    // draw the player using class method of update() that also includes draw()
    player.update()
    
}

animate()
