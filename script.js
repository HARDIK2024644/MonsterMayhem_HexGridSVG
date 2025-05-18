const svg = document.getElementById('hexGrid');
const size = 30;
const width = size * Math.sqrt(3);
const height = size * 2;
const vertDist = height * 3/4;
const rows = 10;
const cols = 10;

svg.setAttribute("width", cols * width + width / 2);
svg.setAttribute("height", rows * vertDist + size);

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const x = col * width + (row % 2) * (width / 2);
    const y = row * vertDist;

    const points = getHexPoints(x, y, size);
    const hex = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    hex.setAttribute("points", points);
    hex.setAttribute("class", "hex");
    hex.addEventListener("click", () => {
      hex.classList.toggle("selected");
    });
    svg.appendChild(hex);
  }
}

function getHexPoints(cx, cy, size) {
  let points = [];
  for (let i = 0; i < 6; i++) {
    let angle = Math.PI / 180 * (60 * i - 30);
    let x = cx + size * Math.cos(angle);
    let y = cy + size * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}
