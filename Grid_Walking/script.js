var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");



class Bit {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.state = true;
    }

    draw() {

        context.beginPath();
        if (this.state) {
            context.fillStyle = "yellow";

        } else {
            context.fillStyle = "brown";
        }
        context.rect(this.x, this.y, 100, 100);
        context.stroke();
        context.fill();
        context.closePath();
    }
}
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        addEventListener('keydown', (e) => {
            console.log("test", e.keyCode);
            switch (e.keyCode) {
                case 37:
                    this.x -= 5;
                    break;
                case 38:
                    this.y -= 5;
                    break;
                case 39:
                    this.x += 5
                    break;
                case 40:
                    this.y += 5
                    break;





            }
            this.draw();
        })
    }
    draw() {
        context.beginPath();
        context.fillStyle = "green";
        context.arc(this.x, this.y, 5, 0, Math.PI * 2);
        context.stroke();
        context.fill();
        context.closePath();
    }
}
var n = 64;
var nRow = 8;
var elLenght = 100;
var elHeight = 100;
var grid = [];

for (var i = 0; i < n; i++) {
    var x = i % nRow * elLenght;
    var y = Math.floor(i / nRow) * elHeight;
    var el = new Bit(x, y);
    el.draw();
    grid.push(el);

}

var Kevin = new Player(150, 150);
Kevin.draw();

function animate() {
    context.clearRect(0, 0, 800, 800);
    for (var i = 0; i < grid.length; i++) {

        if (i == getGrid(Kevin.x, Kevin.y)) {
            grid[i].state = true;
        } else {
            grid[i].state = false;
        }
        grid[i].draw();
    }
    Kevin.draw();

}

setInterval(animate, 1);

function getGrid(x, y) {
    var index = Math.floor(y / elHeight) * nRow + Math.floor(x / elLenght);
    return index;
}
