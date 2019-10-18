class Circle {
  constructor(radius, fill, stroke = "", strokeWidth = "") {
    this.radius = radius;
    this.fill = fill;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;
  }

  draw(x, y) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttributeNS(null, "cx", x);
    circle.setAttributeNS(null, "cy", y);
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "fill", this.fill);
    circle.setAttributeNS(null, "stroke", this.stroke);
    circle.setAttributeNS(null, "stroke-width", this.strokeWidth);
    artBoard.append(circle);
  }
}
