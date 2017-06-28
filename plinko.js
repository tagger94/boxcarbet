function Plinko(x, y, r) {
    var options = {
        restitution : 1,
        friction : 0,
        isStatic : true
    };

    this.list = [];

    for (let i = 0; i < 3; i++) {
        this.list.push({
            x : getRandom(-1 * r + x, r + x),
            y : getRandom(-1 * r + y, r + y),
        });
    }

    this.body = Bodies.fromVertices(x, y, this.list, options);
    this.body.label = "plinko";
    World.add(world, this.body);
}

Plinko.prototype.show = function() {
    noStroke();
    fill(127);
    var pos = this.body.position;
    beginShape();
    for (let i = 0; i < 3; i++) {
        vertex(this.list[i].x, this.list[i].y);
    }
    endShape();
};
