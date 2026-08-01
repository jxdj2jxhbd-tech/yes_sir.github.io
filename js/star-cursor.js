!function () {
    function e(e, t, n) {
        this.x = e, this.y = t, this.size = n, this.vx = 2 * Math.random() - 1, this.vy = 2 * Math.random() - 1, this.alpha = 1, this.color = `hsl(${360 * Math.random()}, 100%, 70%)`
    }
    e.prototype.draw = function (t) {
        t.save(), t.beginPath(), t.arc(this.x, this.y, this.size, 0, 2 * Math.PI), t.fillStyle = this.color.replace("70%", `${70 * this.alpha}%`), t.fill(), t.restore()
    }, e.prototype.update = function () {
        return this.x += this.vx, this.y += this.vy, this.alpha -= .015, this.alpha > 0
    };
    let t = [], n = 0, o = null, i = null;
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
    window.addEventListener("load", function () {
        i = document.createElement("canvas"), i.style.position = "fixed", i.style.pointerEvents = "none", i.style.zIndex = "99999", i.style.top = 0, i.style.left = 0, i.width = window.innerWidth, i.height = window.innerHeight, document.body.appendChild(i), o = i.getContext("2d"),
        window.addEventListener("mousemove", function (e) {
            n++, n % 2 == 0 && t.push(new e(e.clientX, e.clientY, 3 + 3 * Math.random()))
        }),
        window.addEventListener("resize", function () {
            i.width = window.innerWidth, i.height = window.innerHeight
        }),
        function s() {
            o.clearRect(0, 0, i.width, i.height);
            for (let e = t.length - 1; e >= 0; e--) t[e].update() || t.splice(e, 1);
            t.forEach(e => {
                e.draw(o)
            }), requestAnimationFrame(s)
        }
        s()
    })
}();