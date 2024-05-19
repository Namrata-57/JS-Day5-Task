// Circle - Class
// Convert the UML diagram to Javascript class. - use number for double

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    //getter for radius
    getRadius() {
        return this.radius;
    }

    //setter for radius
    setRadius() {
        this.radius = radius;
    }

    //getter for color
    getColor() {
        return this.color;
    }

    //setter for color
    setColor() {
        this.color = color;
    }

    //tostring function
    tostring() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    //find area
    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    //find circumference of circle
    getCircumference() {
        return Math.PI * this.radius * 2;
    }
}

//Examples
const circle1 = new Circle(3, 'blue');
console.log(circle1.tostring()); // Ouput: Circle[radius=3, color=blue]
console.log(circle1.getArea()); // Ouput: 28.274333882308138
console.log(circle1.getCircumference()); // Ouput: 18.84955592153876

const circle2 = new Circle();
console.log(circle2.tostring()); // Ouput: Circle[radius=1, color=red]
console.log(circle2.getArea()); // Ouput: 3.141592653589793
console.log(circle2.getCircumference()); // Ouput: 6.283185307179586
