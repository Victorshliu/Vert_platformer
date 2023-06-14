// Create Sprite Class
class Sprite { 
    // We use an Object in the constructor so that it is more descriptive and easier to read 
    constructor({position, imageSrc }) {
        this.position = position
        // Image() is a default method available in the javascript language
        this.image = new Image()
        this.image.src = imageSrc
    }
    draw() {
        // if prevents the image from being drawn before it is loaded 
        if (!this.image) return
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
    update() {
        this.draw()
    }
};


