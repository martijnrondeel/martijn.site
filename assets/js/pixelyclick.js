// Customized version of Nick Sheffield's "Anchor Click Canvas Animation"
// http://codepen.io/nicksheffield/pen/NNEoLg

var anchors = document.querySelectorAll('.kaboom');

if (!mobileDevice) {
    Array.prototype.forEach.call(anchors, function(anchor) {
        anchor.addEventListener('click', explode);
    });
}

function explode(e) {
    var x = e.clientX;
    var y = e.clientY;
    var c = document.createElement('canvas');
    var ctx = c.getContext('2d');
    var ratio = window.devicePixelRatio;
    var particles = [];

    document.body.appendChild(c);

    c.style.position = 'absolute';
    c.style.left = x - 100 + 'px';
    c.style.top = y - 100 + 'px';
    c.style.pointerEvents = 'none';
    c.style.width = c.style.height = 200 + 'px';
    c.width = c.height = 200 * ratio;

    function Particle() {
        return {
            x: c.width / 2,
            y: c.height / 2,
            size: r(10, 50),
            color: 'rgb(' + [r(0, 255), r(0, 255), r(0, 255)].join(',') + ')',
            rotation: r(0, 360, true),
            speed: r(0, 12),
            friction: 0.9,
            opacity: r(0, 0.5, true),
            yVel: 0,
            gravity: 0.1
        };
    }

    for (var i = 0; ++i < 10;) {
        particles.push(Particle());
    }

    function render() {
        ctx.clearRect(0, 0, c.width, c.height);

        particles.forEach(function(p, i) {
            angleTools.moveOnAngle(p, p.speed);

            p.opacity -= 0.01;
            p.speed *= p.friction;
            p.size *= p.friction;
            p.yVel += p.gravity;
            p.y += p.yVel;

            if (p.opacity < 0) return;
            if (p.size < 0) return;

            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
    }


    (function renderLoop() {
        requestAnimationFrame(renderLoop);
        render();
    })();

    setTimeout(function() {
        document.body.removeChild(c);
    }, 3000);
}

var angleTools = {
    moveOnAngle: function(t, n) {
        var a = this.getOneFrameDistance(t, n);
        t.x += a.x;
        t.y += a.y;
    },
    getOneFrameDistance: function(t, n) {
        return {
            x: n * Math.cos(t.rotation * Math.PI / 180),
            y: n * Math.sin(t.rotation * Math.PI / 180)
        };
    }
};

function r(a, b, c) {
    return parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));
}
