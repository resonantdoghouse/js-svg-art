/*
 * drawing 3
 */
const sky = new Rect(artBoardWidth, artBoardHeight, "#BBDDF2");
sky.draw(0, 0);

const sun = new Circle(artBoardWidth * 0.25, "#F2BE5C");
sun.draw(artBoardWidth / 2, sun.radius * 1.5);

const water = new Rect(artBoardWidth, artBoardHeight, "#6CAFD9");
water.draw(0, artBoardHeight * 0.3);

const land = new Rect(artBoardWidth, artBoardHeight, "#F2CEA2");
land.draw(0, artBoardHeight * 0.5);
