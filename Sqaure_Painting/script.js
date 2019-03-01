var canvas = document.getElementById("canvas");
var context = canvas.getContext ("2d");
//context.globalAlpha =0.7;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

class Bit {
constructor(x,y){
  if(Math.random()<=0.5){
    this.state = true;
  } else {
     this.state = false
   }
  this.x = x;
  this.y = y;
  addEventListener('mousedown',(e)=>{
    let mouseX = getMousePos(canvas,e).x;
    let mouseY = getMousePos(canvas,e).y;
    console.log(getMousePos(canvas,e).y,getMousePos(canvas,e).y)
//console.log(mouseX > this.x && mouseY > this.y && mouseX < this.x + 100 && mouseY < this.y + 100)
   if(mouseX > this.x && mouseY > this.y && mouseX < this.x + 25 && mouseY < this.y + 25){
//console.log("chexk");
      this.state = !this.state;
      this.draw(context);
    }
  })

}
 draw(context){
   if (this.state == true){
   context.fillStyle = "blue";
 }
 else if (this.state == false) {
   context.fillStyle = "green";
}
   context.lineWidth = 2;
   context.strokeRect(this.x,this.y,25,25);
   context.fillRect(this.x,this.y,25,25);

 }
}
for (let i = 0; i < 128; i++) {
for (let k = 0; k < 128; k++){

var kevin = new Bit(i*25,k*25);
kevin.draw(context);
}
}
