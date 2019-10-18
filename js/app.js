/* ==========================================================================
   Main SVG element where svg element will be appended
   ========================================================================== */
const artBoard = document.getElementById("artboard");
const artBoardWidth = artBoard.clientWidth;
const artBoardHeight = artBoard.clientHeight;

/* ==========================================================================
   Functions
   ========================================================================== */

// Function to help center elements horizontally
function centerX(shapeWidth) {
  return artBoardWidth / 2 - shapeWidth / 2;
}

// Function to help center elements vertically
function centerY(shapeHeight) {
  return artBoardHeight / 2 - shapeHeight / 2;
}

/* ==========================================================================
   Examples
   ========================================================================== */

/* Example of using a mousedown event to create svg elements
   ========================================================================== */
artBoard.addEventListener("mousedown", drawOnClick);

function drawOnClick(event) {
  const circle = new Circle(20, "#242614");
  circle.draw(event.offsetX, event.offsetY);
}

/* Example of using a loop to create svg elements
   ========================================================================== */
// for(let i = 0; i < artBoardWidth; i+=60){
//   const circle = new Circle(20, "#798C35");
//   circle.draw(i, i);
// }

/* Example of creating elements line by line
   ========================================================================== */
// const box1 = new Rect(300, 400, "#485922");
// box1.draw(0, 0);

// const box2 = new Rect(200, 200, "#798C35");
// box2.draw(centerX(box2.width), centerY(box2.height));

// const box3 = new Rect(150, 150, "#B4BF5E");
// box3.draw(centerX(box3.width), centerY(box3.height));

// const circle1 = new Circle(60, "#F2F2F2", "#242614", 5);
// circle1.draw(artBoard.clientWidth / 2, artBoard.clientHeight / 2);
