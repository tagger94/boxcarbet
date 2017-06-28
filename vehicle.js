let r = 300;

function Vehicle(x = 0, y = 0, index = 5) {
    var options = {
        restitution : 1,
        friction : 0,
        isStatic : true
    };

    this.center = {x, y};
    this.points = radialSortedList(index, this.center);
    this.panels = [];

    for (let i = 0; i < index; i++) {
        let i2 = (i + 1) % index;
        this.panels.push(new Panel(this.center, this.points[i], this.points[i2]));
    }

    // this.body = Bodies.fromVertices(x, y, this.list, options);
    // this.body.label = "vehicle";
    // World.add(world, this.body);
}

Vehicle.prototype.show = function() {
    for (let i = 0; i < this.panels.length; i++) {
        this.panels[i].show();
    }
};

function radialSortedList(index = 8, center = {
    x : 0,
    y : 0
}) {

    let list = [];

    for (let i = 0; i < index; i++) {
        list.push({
            x : getRandom(-1, 1) * r + center.x,
            y : getRandom(-1, 1) * r + center.y,
        });
    }

    list.sort(getAngle);

    return list;
}

function getAngle(p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// let v = new Vehicle(0,0);
// console.log(v);