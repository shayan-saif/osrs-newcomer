const map = document.getElementById("mapImg");

let { scrollHeight, scrollWidth } = map;

const canvas = document.getElementById("mapCanvas");
canvas.setAttribute("style", `position:absolute`);
canvas.setAttribute("width", scrollWidth);
canvas.setAttribute("height", scrollHeight);

const ctx = canvas.getContext("2d");
ctx.strokeStyle = "rgb(255, 0, 0)";
ctx.lineWidth = 5;
ctx.setLineDash([10, 10]);

const coords = Array.from(document.querySelectorAll("area[shape=circle]")).map(
  (el) => {
    let coordStr = el.getAttribute("coords");
    let coordArr = coordStr.split(",").slice(0, 2);
    const coords = { x: +coordArr[0], y: +coordArr[1] };

    return coords;
  }
);

function show(curr, next) {
  if (next === null) return;

  ctx.beginPath();
  ctx.moveTo(coords[curr].x, coords[curr].y);
  ctx.lineTo(coords[next].x, coords[next].y);
  ctx.stroke();
}

function hide() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
