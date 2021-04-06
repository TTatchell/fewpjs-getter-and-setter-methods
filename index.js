class Circle {
    constructor(radius) {
        this.radius = radius;

    }
    radius() {
        return this.radius;
    }

    get diameter() {
        return (2 * this.radius)
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    get area() {
        return Math.PI * this.radius ** 2
    }

    set diameter(diameter) {
        this.radius = diameter/2;

    }

    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI);
    }
}