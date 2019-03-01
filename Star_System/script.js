const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// canvas.width = window.innetWidth;
// canvas.height = window.innerHeight;

let sun;
let mercury = {}
let venus = {}
let earth = {}
let moon = {}
let mars = {}
let deimos = {}
let phobos = {}
let jupiter = {}
let io = {}
let europa = {}
let ganymede = {}
let callisto = {}
let saturn = {}
let titan = {}
let uranus = {}
let neptune = {}
function SetUp() {
  sun = new Point(800,450,50,"yellow");
  sun.pos = new Vector2(sun.x,sun.y);

    mercury.rel_pos = new Vector2(70,0);
      mercury.point = new Point(500,200,5,"gray");
      mercury.pos = new Vector2(0,0);
      mercury.dAngle = 0.01;

    venus.rel_pos = new Vector2(90,0);
      venus.point = new Point(500,200,7,"#e08b3e");
      venus.pos = new Vector2(0,0);
      venus.dAngle = 0.008;

    earth.rel_pos = new Vector2(130,0);
      earth.point = new Point(500,200,8,"blue");
      earth.pos = new Vector2(0,0);
      earth.dAngle = 0.007;

    moon.rel_pos = new Vector2(18,0);
      moon.point = new Point(500,200,3,"gray");
      moon.pos = new Vector2(0,0);
      moon.dAngle = 0.03;

    mars.rel_pos = new Vector2(180,0);
      mars.point = new Point(500,200,8,"#813124");
      mars.pos = new Vector2(0,0);
      mars.dAngle = 0.006;

    phobos.rel_pos = new Vector2(15,0);
      phobos.point = new Point(500,200,2,"gray");
      phobos.pos = new Vector2(0,0);
      phobos.dAngle = 0.05;

    deimos.rel_pos = new Vector2(20,0);
      deimos.point = new Point(500,200,2,"gray");
      deimos.pos = new Vector2(0,0);
      deimos.dAngle = 0.03;

    jupiter.rel_pos = new Vector2(240,0);
      jupiter.point = new Point(500,200,16,"#C88B3A");
      jupiter.pos = new Vector2(0,0);
      jupiter.dAngle = 0.004;

      io.rel_pos = new Vector2(20,0);
        io.point = new Point(500,200,3,"gray");
        io.pos = new Vector2(0,0);
        io.dAngle = 0.03;

      europa.rel_pos = new Vector2(27,0);
        europa.point = new Point(500,200,3,"gray");
        europa.pos = new Vector2(0,0);
        europa.dAngle = 0.04;

      ganymede.rel_pos = new Vector2(35,0);
        ganymede.point = new Point(500,200,3,"gray");
        ganymede.pos = new Vector2(0,0);
        ganymede.dAngle = 0.05;

      callisto.rel_pos = new Vector2(42,0);
        callisto.point = new Point(500,200,3,"gray");
        callisto.pos = new Vector2(0,0);
        callisto.dAngle = 0.06;

    saturn.rel_pos = new Vector2(330,0);
      saturn.point = new Point(500,200,15,"#e08b3e");
      saturn.pos = new Vector2(0,0);
      saturn.dAngle = 0.002;

      titan.rel_pos = new Vector2(25,0);
        titan.point = new Point(500,200,3,"gray");
        titan.pos = new Vector2(0,0);
        titan.dAngle = 0.06;

    uranus.rel_pos = new Vector2(400,0);
      uranus.point = new Point(500,200,13,"#D5FBFC")
      uranus.pos = new Vector2(0,0);
      uranus.dAngle = 0.001;

    neptune.rel_pos = new Vector2(450,0);
      neptune.point = new Point(500,200,13,"#3f54ba")
      neptune.pos = new Vector2(0,0);
      neptune.dAngle = 0.0008;

animationLoop()
}
function animationLoop() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0,0,canvas.width,canvas.height, "black");
// context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animationLoop);
sun.draw();

  mercury.rel_pos.angle += mercury.dAngle;
    mercury.pos.sumVector(sun.pos,mercury.rel_pos);
    mercury.point.x = mercury.pos.dx;
    mercury.point.y = mercury.pos.dy;
    mercury.point.draw();

  venus.rel_pos.angle += venus.dAngle;
    venus.pos.sumVector(sun.pos,venus.rel_pos);
    venus.point.x = venus.pos.dx;
    venus.point.y = venus.pos.dy;
    venus.point.draw();

  earth.rel_pos.angle += earth.dAngle;
    earth.pos.sumVector(sun.pos,earth.rel_pos);
    earth.point.x = earth.pos.dx;
    earth.point.y = earth.pos.dy;
    earth.point.draw();

  mars.rel_pos.angle += mars.dAngle;
    mars.pos.sumVector(sun.pos,mars.rel_pos);
    mars.point.x = mars.pos.dx;
    mars.point.y = mars.pos.dy;
    mars.point.draw();

  moon.rel_pos.angle += moon.dAngle;
    moon.pos.sumVector(earth.pos,moon.rel_pos);
    moon.point.x = moon.pos.dx;
    moon.point.y = moon.pos.dy;
    moon.point.draw();

  phobos.rel_pos.angle += phobos.dAngle;
    phobos.pos.sumVector(mars.pos,phobos.rel_pos);
    phobos.point.x = phobos.pos.dx;
    phobos.point.y = phobos.pos.dy;
    phobos.point.draw();

  deimos.rel_pos.angle += deimos.dAngle;
    deimos.pos.sumVector(mars.pos,deimos.rel_pos);
    deimos.point.x = deimos.pos.dx;
    deimos.point.y = deimos.pos.dy;
    deimos.point.draw();

  jupiter.rel_pos.angle += jupiter.dAngle;
    jupiter.pos.sumVector(sun.pos,jupiter.rel_pos);
    jupiter.point.x = jupiter.pos.dx;
    jupiter.point.y = jupiter.pos.dy;
    jupiter.point.draw();

  io.rel_pos.angle += io.dAngle;
    io.pos.sumVector(jupiter.pos,io.rel_pos);
    io.point.x = io.pos.dx;
    io.point.y = io.pos.dy;
    io.point.draw();

  europa.rel_pos.angle += europa.dAngle;
    europa.pos.sumVector(jupiter.pos,europa.rel_pos);
    europa.point.x = europa.pos.dx;
    europa.point.y = europa.pos.dy;
    europa.point.draw();

  ganymede.rel_pos.angle += ganymede.dAngle;
    ganymede.pos.sumVector(jupiter.pos,ganymede.rel_pos);
    ganymede.point.x = ganymede.pos.dx;
    ganymede.point.y = ganymede.pos.dy;
    ganymede.point.draw();

  callisto.rel_pos.angle += callisto.dAngle;
    callisto.pos.sumVector(jupiter.pos,callisto.rel_pos);
    callisto.point.x = callisto.pos.dx;
    callisto.point.y = callisto.pos.dy;
    callisto.point.draw();

  saturn.rel_pos.angle += saturn.dAngle;
    saturn.pos.sumVector(sun.pos,saturn.rel_pos);
    saturn.point.x = saturn.pos.dx;
    saturn.point.y = saturn.pos.dy;
    saturn.point.draw();

  titan.rel_pos.angle += titan.dAngle;
    titan.pos.sumVector(saturn.pos,titan.rel_pos);
    titan.point.x = titan.pos.dx;
    titan.point.y = titan.pos.dy;
    titan.point.draw();

  uranus.rel_pos.angle += uranus.dAngle;
    uranus.pos.sumVector(sun.pos,uranus.rel_pos);
    uranus.point.x = uranus.pos.dx;
    uranus.point.y = uranus.pos.dy;
    uranus.point.draw();

  neptune.rel_pos.angle += neptune.dAngle;
    neptune.pos.sumVector(sun.pos,neptune.rel_pos);
    neptune.point.x = neptune.pos.dx;
    neptune.point.y = neptune.pos.dy;
    neptune.point.draw();




}
SetUp()
