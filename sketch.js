var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var plinkos = [];
var bounds = [];
var cols = 11;
var rows = 10;

function setup2() {
    createCanvas(600, 700);
    colorMode(HSB);
    engine = Engine.create();
    world = engine.world;

    newParticle();
    var spacing = width / cols;
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols + 1; i++) {
            var x = i * spacing;
            if (j % 2 == 0) {
                x += spacing / 2;
            }
            var y = spacing + j * spacing;
            var p = new Plinko(x, y, 16);
            plinkos.push(p);
        }
    }

    var b = new Boundary(width / 2, height + 50, width, 100);
    bounds.push(b);

    for (var i = 0; i < cols + 2; i++) {
        var x = i * spacing;
        var h = 100;
        var w = 10;
        var y = height - h / 2;
        var b = new Boundary(x, y, w, h);
        bounds.push(b);
    }
};

function newParticle() {
    var p = new Particle(300, 0, 10);
    particles.push(p);
};

function draw2() {
    background(0, 0, 0);
    if (frameCount % 20 == 0) {
        newParticle();
    }
    Engine.update(engine, 1000 / 30);
    for (var i = 0; i < particles.length; i++) {
        particles[i].show();
        if (particles[i].isOffScreen()) {
            World.remove(world, particles[i].body);
            particles.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].show();
    }
    for (var i = 0; i < bounds.length; i++) {
        bounds[i].show();
    }
};

let vehicle;
function setup() {
    createCanvas(600, 700);
    colorMode(HSB);
    engine = Engine.create();
    world = engine.world;

    vehicle = new Vehicle(200, 200, 8);
}

function draw() {
    vehicle.show();
}