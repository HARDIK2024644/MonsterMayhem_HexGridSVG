const svg = document.getElementById('hexGrid');
const monsterSelect = document.getElementById('monsterSelect');

const size = 30;
const width = size * Math.sqrt(3);
const height = size * 2;
const vertDist = height * 3/4;
const rows = 10;
const cols = 10;

svg.setAttribute("width", cols * width + width / 2);
svg.setAttribute("height", rows * vertDist + size);

const tiles = [];

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

// Create the hex grid
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const x = col * width + (row % 2) * (width / 2);
    const y = row * vertDist;

    const points = getHexPoints(x, y, size);
    const hex = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    hex.setAttribute("points", points);
    hex.setAttribute("class", "hex");
    hex.dataset.row = row;
    hex.dataset.col = col;

    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.appendChild(hex);

    // Add click event to place a monster only on edge
    hex.addEventListener("click", () => {
      const r = parseInt(hex.dataset.row);
      const c = parseInt(hex.dataset.col);

      // Allow only edge placement
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        placeMonster(group, r, c);
      } else {
        alert("Monsters can only be placed on the edge!");
      }
    });

    svg.appendChild(group);
    tiles.push({ row, col, element: hex, group, monster: null });
  }
}

// Place monster with emoji based on selection
function placeMonster(group, row, col) {
  const monsterType = monsterSelect.value;
  const emoji = {
    vampire: "🧛",
    werewolf: "🐺",
    ghost: "👻"
  }[monsterType];

  // Check if already occupied
  const existing = group.querySelector(".monster");
  if (existing) {
    alert("This tile already has a monster!");
    return;
  }

  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", group.firstChild.getBBox().x + size / 1.5);
  text.setAttribute("y", group.firstChild.getBBox().y + size);
  text.setAttribute("class", `monster ${monsterType}`);
  text.textContent = emoji;

  group.appendChild(text);

  // Save to tile state for future logic
  const tile = tiles.find(t => t.row === row && t.col === col);
  if (tile) {
    tile.monster = { type: monsterType, owner: "P1" }; // Static for now
  }
}
