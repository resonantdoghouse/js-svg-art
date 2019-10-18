/*
 * SVG ArtBoard to append elements to
 */
const artBoard = document.getElementById("artboard");

const artBoardWidth = artBoard.clientWidth;
const artBoardHeight = artBoard.clientHeight;

/*
 * a utility function to help center elements horizontally
 */
function centerX(shapeWidth) {
  return artBoardWidth / 2 - shapeWidth / 2;
}

// a utility function to help center elements vertically
function centerY(shapeHeight) {
  return artBoardHeight / 2 - shapeHeight / 2;
}

/*
 * use a mousedown event to create svg elements at the mouse screen position
 */
// artBoard.addEventListener("mousedown", drawOnClick);

// function drawOnClick(event) {
//   const circle = new Circle(20, "black");
//   circle.draw(event.offsetX, event.offsetY);
// }

/*
 * use a loop to create svg elements
 */
// for(let i = 0; i < 500; i+=50){
//   const circle = new Circle(20, "black");
//   circle.draw(i, 100);
// }

/*
 * creating elements line by line
 */
// const box1 = new Rect(300, 400, "skyblue");
// box1.draw(0, 0);

// const box2 = new Rect(200, 200, "coral");
// box2.draw(centerX(box2.width), centerY(box2.height));

// const box3 = new Rect(150, 150, "magenta");
// box3.draw(centerX(box3.width), centerY(box3.height));

// const circle1 = new Circle(60, "purple", "black", 5);
// circle1.draw(artBoard.clientWidth / 2, artBoard.clientHeight / 2);
