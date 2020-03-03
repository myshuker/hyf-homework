
// Circle calculator

class Circle {
constructor(radius) {
this.radius = radius;
}
getDiameter (){
return 2 * this.radius;
}
getCircumference (){
return( 2 * Math.PI * this.radius).toFixed(2);
}
getArea (){
return( Math.PI * this.radius * this.radius).toFixed(2);
}
}
const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();
