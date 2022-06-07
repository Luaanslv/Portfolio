window.onload = function () {
    var LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40;
    var cnv = document.querySelector('#canvas');
    var ctx = cnv.getContext("2d");
    var sprintSheet = new Image();
    sprintSheet.src = "./assets/imagens/nave-movimentos.png";
    var nave = new Sprite(sprintSheet);



    window.addEventListener("keydown", keydownHadler, false);
    window.addEventListener("keyup", keyupHadler, false);

    function keydownHadler(e) {
        switch (e.keyCode) {
            case RIGHT:
                nave.mvRight = true;
                nave.mvLeft = false;
                nave.mvUp = false;
                nave.mvDown = false;
                break
            case LEFT:
                nave.mvRight = false;
                nave.mvLeft = true;
                nave.mvUp = false;
                nave.mvDown = false;
                break
            case UP:
                nave.mvRight = false;
                nave.mvLeft = false;
                nave.mvUp = true;
                nave.mvDown = false;
                break
            case DOWN:
                nave.mvRight = false;
                nave.mvLeft = false;
                nave.mvUp = false;
                nave.mvDown = true;
                break

        }

    }

    function keyupHadler(e) {
        switch (e.keyCode) {
            case RIGHT:
                nave.mvRight = false;
                break
            case LEFT:
                nave.mvLeft = false;
                break
            case DOWN:
                nave.mvDown = false;
                break
            case UP:
                nave.mvUp = false;
                break
        }
    }


    sprintSheet.onload = function () {
        init();
    }

    function init() {
        loop();
    }

    function update() {
        nave.move();
    }

    function draw() {
        ctx.clearRect(0,0,cnv.width,cnv.height);
        nave.draw(ctx);
    }

    function loop() {
        window.requestAnimationFrame(loop, cnv);
        update();
        draw();
    }
}