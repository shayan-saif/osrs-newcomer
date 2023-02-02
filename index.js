// var c = document.getElementById("mapCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(2000, 500);
// ctx.stroke();
const map = document.getElementById("mapImg");
console.log(map.scrollHeight, map.scrollWidth);

let { offsetLeft, scrollHeight, scrollWidth } = map;
const canvas = document.getElementById("mapCanvas");
canvas.setAttribute("style", `position:absolute;left:${offsetLeft}`);
canvas.setAttribute("width", scrollWidth)
canvas.setAttribute("height", scrollHeight)

const ctx = canvas.getContext("2d");

const coords = Array.from(document.querySelectorAll("area[shape=circle]")).map(
  (el) => {
    let coordStr = el.getAttribute("coords");
    let coordArr = coordStr.split(",").slice(0, 2);
    const coords = { x: coordArr[0], y: coordArr[1] };

    return coords;
  }
);

// ctx.beginPath();
// ctx.moveTo(coords[0].x, coords[0].y);
// ctx.lineTo(coords[1].x, coords[1].y);
// ctx.stroke();

console.log(coords[1]);
