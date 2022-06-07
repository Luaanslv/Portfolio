function Sprite(img) {
    // atributos
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;
    this.srcX = this.srcY = 0;
    this.width = 101;
    this.height = 134.75;
    this.alturaTela = screen.height;
    this.larguraTela = screen.width;
    this.posX = (this.larguraTela/1.5), this.posY = (this.alturaTela/1.5);
    this.img = img;
    this.speed = 5;
    this.countAnim = 0;
    
    //Metodo
    //draw
    this.draw = function (ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
        this.animation();
    }
    //move
    this.move = function () {
        if (this.mvLeft) {
            this.posX -= this.speed;
            this.srcY = this.height * 2;
        } else
        if (this.mvRight) {
            this.posX += this.speed;
            this.srcY = this.height * 1;
        } else

        if (this.mvUp) {
            this.posY -= this.speed;
            this.srcY = this.height * 3;
        } else
        if (this.mvDown) {
            this.posY += this.speed;
            this.srcY = this.height * 0;
        }
    }
    //animação
}