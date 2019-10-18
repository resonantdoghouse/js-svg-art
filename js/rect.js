class Rect {
  constructor(width, height, fill) {
    this.width = width;
    this.height = height;
    this.fill = fill;
  }

  draw(x, y) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttributeNS(null, "x", x);
    rect.setAttributeNS(null, "y", y);
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "fill", this.fill);
    artBoard.append(rect);
  }
}
