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
class Player extends Sprite{
    // Contructor for the player
    constructor({
        position,
        collisionBlocks,
        platformBlocks,
        imageSrc,
        frameWidth,
        frameHeight,
        scale = 0.5,
        
    }) {
        super({ 
            imageSrc, 
            frameWidth, 
            frameHeight,
            scale
        })
        this.position = position,
        // velocity is the speed of the player this is used to simulate gravity
        this.velocity = {
            x: 0,
            y: 1,
        }
        this.collisionBlocks = collisionBlocks
        this.platformBlocks = platformBlocks
        this.hitbox = {
            position: {
                x: this.position.x,
                y: this.position.y,
        },
        width: 128,
        height: 256,
    }
    }
    //Player draw method and props
    // child class can override the parent class method so we remove our existing draw method from the player class and use the parent class draw method
    
    applyGravity() {
        this.position.y += this.velocity.y
        this.velocity.y += gravity
    }
    checkVertCollision() {
        for(let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            // conditional to check if player intersecting a collision block
            if ( 
                collision({
                    object1: this,
                    object2: collisionBlock,
            })
            ) {
                if (this.velocity.y > 0) {
                this.velocity.y = 0
                this.position.y = collisionBlock.position.y - this.height - 0.01
                break
                }
                if (this.velocity.y < 0) {
                this.velocity.y = 0
                this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                break 
                }
            }
        }
    }
    checkHorCollision() {
        for(let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            // conditional to check if player intersecting a collision block
            if ( 
                collision({
                    object1: this,
                    object2: collisionBlock,
            })
            ) {
                if (this.velocity.x > 0) {
                this.velocity.x = 0
                this.position.x = collisionBlock.position.x - this.width + 0.01
                // break out of the loop if we find a collision block, helps with performance
                break
                }
                if (this.velocity.x < 0) {
                this.velocity.x = 0
                this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                break
                }
            }
        }
    }
    updateHitBox() {
        this.hitbox = {
            position: {
                x: this.position.x + 50,
                y: this.position.y,
            },
            width:50 ,
            height: 50,
        }
    }
    update() {
        this.updateFrames()
        this.updateHitBox()

        ctx.fillStyle = 'rgba(0,255,0,0.5 )'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

        ctx.fillStyle =  'rgba(255,255,255,1)'
        ctx.fillRect(
            this.hitbox.position.x,
            this.hitbox.position.y, 
            this.hitbox.width, 
            this.hitbox.height )
        this.draw()
        this.position.x += this.velocity.x
        this.checkHorCollision()
        this.applyGravity()
        this.checkVertCollision()
        
    } 
} 