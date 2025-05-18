// Get the SVG element where the hexagons will be drawn
const svg = document.getElementById('hexGrid');

// Define size and spacing for hexagons
const size = 30;
const width = size * Math.sqrt(3);
const height = size * 2;
const vertDist = height * 3/4;
const rows = 10;
const cols = 10;

// Set the SVG container size
svg.setAttribute("width", cols * width + width / 2);
svg.setAttribute("height", rows * vertDist + size);

// Loop to generate hexagons row by row
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    // Calculate position based on offset
    const x = col * width + (row % 2) * (width / 2);
    const y = row * vertDist;

    // Create hexagon points
    const points = getHexPoints(x, y, size);

    // Create SVG polygon element
    const hex = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    hex.setAttribute("points", points);
    hex.setAttribute("class", "hex");

    // Toggle 'selected' class when clicked
    hex.addEventListener("click", () => {
      hex.classList.toggle("selected");
    });

    // Add hexagon to SVG
    svg.appendChild(hex);
  }
}

// Function to calculate 6 points of a hexagon around a center
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
