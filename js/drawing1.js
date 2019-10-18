/*
 * drawing 1
 */
const circle1 = new Circle(artBoardWidth / 3, "#305973");
circle1.draw(artBoardWidth / 2, artBoardWidth / 3);

const circle2 = new Circle(artBoardWidth / 3, "#46788C");
circle2.draw(artBoardWidth / 2, artBoardHeight / 2);

const circle3 = new Circle(artBoardWidth / 3, "#82C9D9");
circle3.draw(artBoardWidth / 2, artBoardHeight - circle3.radius);
