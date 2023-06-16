// Create Sprite Class
class Sprite { 
    // We use an Object in the constructor so that it is more descriptive and easier to read 
    constructor({
        position, 
        imageSrc,
        //q: how do i alter the img to handle an array or a single image?
        //q: how do i add an array
        frameWidth = 1,
        frameHeight = 1,
        frameBuffer = 50,
        scale = 1,
    }) {
        this.position = position
        this.scale = scale 
        // Image() is a default method available in the javascript language
        this.image = new Image()
        this.image.onload = () => {
            this.width = (this.image.width / frameWidth) * this.scale
            this.height = (this.image.height / frameHeight) * this.scale
        }
        this.image.src = imageSrc
        this.frameWidth = frameWidth
        this.frameHeight = frameHeight
        this.currentFrame = 0
        this.frameBuffer = frameBuffer
        this.elapsedFrames = 0
        //q: how do i alter the img to handle an array o

    }
    draw() {
        // if prevents the image from being drawn before it is loaded 
        if (!this.image) return
        const cropbox = {
            position: {
              x: this.currentFrame * (this.image.width / this.frameWidth),
              y: this.currentFrame * (this.image.height / this.frameHeight) ,
            },
            width: this.image.width / this.frameWidth,
            height: this.image.height / this.frameHeight,
          }
      

        ctx.drawImage(
            this.image, 
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }
    update() {
        this.draw()
        this.updateFrames()
    }
    updateFrames() {
        this.elapsedFrames++
        if (this.elapsedFrames % this.frameBuffer === 0){
            if (this.currentFrame < this.frameWidth - 1)
            this.currentFrame++
            else this.currentFrame = 0
            //q: what if I want the image to cycle through specific frames since all the player sprites are on the same sheet?
            //a: you can use an array to store the frames you want to cycle through and then use a for loop to cycle through them
    }
}
};
