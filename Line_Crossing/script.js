const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100, 100, 10, 'green', "A");
let B = new Point(400, 300, 10, 'red', "B");
let g = {};
g.pos = new Vector2(100, 100);
g.point = new Point(g.pos.dx, g.pos.dy, 10, 'blue', "C");
g.vel = new Vector2(1, 1);
g.update = () => {
  g.pos.add(g.vel);
  g.point.x = g.pos.dx;
  g.point.y = g.pos.dy;
  if (g.pos.dx > 800 - g.point.r || g.pos.dx < 0) {
    g.vel.dx = -g.vel.dx;

  }
  if (g.pos.dy > 450 - g.point.r || g.pos.dy < 0) {
    g.vel.dy = -g.vel.dy;

  }

}

let h = {};
h.pos = new Vector2(1,1);
h.point = new Point(1,1,10,"pink","D");
h.update = () =>{
  h.point.x = h.pos.dx;
  h.point.y = h.pos.dy;

}

let l = new Line(1, 1);
let m = new Line(1, 1);l

A.drag();
B.drag();

function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0, 0, 800, 450);
  l.letTwoPointsDefineLine(A, B);
  l.draw(0, 800);

  m.letSlopeAndPointDefineLine(-1/l.slope,g.point);
  m.draw(0, 800);

  g.update();
    g.vel.draw(context,g.pos.dx,g.pos.dy,30);
  g.point.draw();

  h.pos.dx = l.intersection(m).x;
    h.pos.dy = l.intersection(m).y;
    h.update();

    h.point.draw();

  A.draw();
  B.draw();
}
loop();
