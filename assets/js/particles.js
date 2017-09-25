var particles = [];
var mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var Particle = function(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-0.3, 0.3), random(-0.3, 0.3));
    this.position = position.copy();
    this.color = [random(0, 255), random(0, 255), random(0, 255)];

    Particle.prototype.run = function() {
        this.update();
        this.display();
        this.intersects();
    };

    Particle.prototype.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        this.acceleration.mult(-0.1);

        if (this.position.x < 0)
            this.position.x = width;
        else if (this.position.x > width)
            this.position.x = 0;
        else if (this.position.y < 0)
            this.position.y = height;
        else if (this.position.y > height)
            this.position.y = 0;
    };

    Particle.prototype.intersects = function() {
        for (var i = 0; i < particles.length; i++) {
            var other = particles[i];

            if (other !== this) {
                var dir = p5.Vector.sub(this.position, other.position);

                if (dir.mag() < 12) {
                    dir.setMag(0.1);
                    this.acceleration.add(dir);
                }

                if (dir.mag() < 100) {
                    strokeWeight(0.2);
                    stroke(this.color[0], this.color[1], this.color[2], 255 - dir.mag() * (255 / 100)); // Set opacity according to distance
                    line(this.position.x, this.position.y, other.position.x, other.position.y);
                }
            }
        }
    };

    Particle.prototype.display = function() {
        noStroke();
        fill(this.color[0], this.color[1], this.color[2]);
        ellipse(this.position.x, this.position.y, 2, 2);

        // Only allow mouse input on desktop
        if (mobileDevice)
            return;

        var dir = p5.Vector.sub(this.position, createVector(mouseX, mouseY));

        if (dir.mag() < 160) {
            stroke(this.color[0], this.color[1], this.color[2]);
            strokeWeight(0.5);
            line(this.position.x, this.position.y, mouseX, mouseY);
        }
    };
};

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("particles");

    for (var i = 0; i < width / 15; i++)
        particles.push(new Particle(createVector(random(width), random(height))));

    // Don't allow spawning particles on mobile devices
    if (!mobileDevice) {
        window.onclick = function() {
            particles.push(new Particle(createVector(mouseX, mouseY)));
        };
    }
}

function draw() {
    clear();

    for (var i = 0; i < particles.length; i++)
        particles[i].run();
}