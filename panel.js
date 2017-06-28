function Panel(center_p, left_p, right_p) {
    var options = {
        restitution : 1,
        friction : 0,
        isStatic : true
    };

    // let temp_p = {x:0, y:0}
    this.list = [left_p, center_p, right_p];

    this.body = Bodies.fromVertices(center_p.x, center_p.y, this.list, options);
    this.body.label = "panel";
    // World.add(world, this.body);
}

Panel.prototype.show = function() {
    noStroke();
    fill(127);
    var pos = this.body.position;
    ellipse(0, 0, 50,50);
    beginShape();
    for (let i = 0; i < 3; i++) {
        vertex(this.list[i].x, this.list[i].y);
    }
    endShape();

    
};