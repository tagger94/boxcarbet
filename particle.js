function Particle(x, y, r) {
    this.hue = random(360);
    var options = {
        restitution : 0.5,
        friction : 0,
        density : 1
    };
    x += random(-1, 1);
    this.body = Bodies.circle(x, y, r, options);
    this.body.label = "particle";
    this.r = r;
    World.add(world, this.body);
};

Particle.prototype.isOffScreen = function() {
    var x = this.body.position.x;
    var y = this.body.position.y;
    return (x < -50 || x > width + 50 || y > height);
};

Particle.prototype.show = function() {
    fill(this.hue, 255, 255);
    noStroke();
    var pos = this.body.position;
    // push();
    // translate(pos.x, pos.y);
    ellipse(pos.x, pos.y, this.r * 2);
    // pop();
};
