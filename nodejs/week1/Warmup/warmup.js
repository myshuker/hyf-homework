
// Circle calculator

class Circle {
    constructor(radius) {
        this.radius = radius;
     }

     
     getDiameter (){
        this.diameter = 2 * this.radius;
        console.log(this.diameter);
     }

     getCircumference (){
        this.circumference = 2 * Math.PI * this.radius;
        const ccumFix = this.circumference.toFixed(2);
        console.log(ccumFix);
    }

    getArea (){
        this.area = Math.PI * this.radius * this.radius;
        const areaFix = this.area.toFixed(2);
        console.log(areaFix);
    }
     
}
const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();