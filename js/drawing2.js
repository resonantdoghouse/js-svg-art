/*
 * drawing 2
 */
const backgroundRect = new Rect(artBoardWidth, artBoardHeight, "#FCFFF5");
backgroundRect.draw(0, 0);

const topRect = new Rect(artBoardWidth / 2, artBoardHeight / 2, "#CBDBD7");
topRect.draw(0, 0);

const bottomRect = new Rect(artBoardWidth / 2, artBoardHeight / 2, "#91AAB4");
bottomRect.draw(artBoardWidth / 2, artBoardHeight / 2);

const circle = new Circle(artBoardWidth * 0.25, "#46788C");
circle.draw(artBoardWidth / 2, artBoardHeight / 2);
