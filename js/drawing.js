/*
 * creating elements line by line
 */
const circle1 = new Circle(artBoardWidth / 3, "#305973");
circle1.draw(artBoardWidth / 2, artBoardWidth / 3);

const circle2 = new Circle(artBoardWidth / 3, "#46788C");
circle2.draw(artBoardWidth / 2, artBoardHeight / 2);

const circle3 = new Circle(artBoardWidth / 3, "#82C9D9");
circle3.draw(artBoardWidth / 2, artBoardHeight - circle3.radius);

// const box1 = new Rect(300, 400, "skyblue");
// box1.draw(0, 0);

// const box2 = new Rect(200, 200, "coral");
// box2.draw(centerX(box2.width), centerY(box2.height));

// const box3 = new Rect(150, 150, "magenta");
// box3.draw(centerX(box3.width), centerY(box3.height));

// const circle1 = new Circle(60, "purple", "black", 5);
// circle1.draw(artBoard.clientWidth / 2, artBoard.clientHeight / 2);
