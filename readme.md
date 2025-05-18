 🎮 Monster Mayhem - Hex Grid Game

 Project Overview

Monster Mayhem is a beginner-friendly, browser-based game featuring a grid of hexagonal tiles. The game allows users to hover and click on hex tiles to simulate interaction with a game board. It was created as a learning project using basic HTML, CSS, and JavaScript.

Features

Interactive 10x10 hexagon grid layout
Tiles change color on hover
Click to select/deselect tiles
Clean layout with no gaps or overlaps between hexagons
Beginner structure with separate HTML, CSS, and JS files

Troubleshooting & Fixes

While working on this project, I encountered and resolved the following issues:

Issue: Hexagons were overlapping and not aligned properly.  
Fix: Adjusted CSS `transform`, spacing, and layout structure using `flexbox` and `translate()`.

Issue: Tiles had large gaps between them.  
Fix: Re-calculated margins and used consistent size units to maintain grid spacing.

Issue:Hover effects weren't working initially.  
Fix: Added clear `:hover` styles in CSS and checked for conflicts in z-index and positioning.

Issue:Click events weren’t toggling tile selection.  
Fix: Implemented a `selected` class in JavaScript to toggle tile state on click.

Learning Outcomes

 Learned how to structure and style a hex grid layout from scratch
 Practiced using JavaScript event listeners for interactive UI
 Gained experience debugging visual layout issues using developer tools
 Used Git and GitHub for version control and tracking progress

 How to Run

1. Clone the repository or download the ZIP file.
2. Open the project folder.
3. Launch `index.html` in any modern web browser.
4. Hover and click tiles to interact with the grid.



