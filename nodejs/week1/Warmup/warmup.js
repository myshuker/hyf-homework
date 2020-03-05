
// Circle calculator

class Circle {
        constructor(radius) {this.radius = radius;}
    getDiameter (){return 2 * this.radius;}
    getCircumference (){return( 2 * Math.PI * this.radius);}
    getArea (){return( Math.PI * this.radius * this.radius);}
    }
const circle = new Circle(10);
console.log("getDiameter :", circle.getDiameter());
console.log("getCircumference :", circle.getCircumference());
console.log("getArea :", circle.getArea());




