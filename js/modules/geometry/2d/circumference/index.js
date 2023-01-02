class Circumference extends Bidimensional {
    constructor(radio, diameter, area, perimeter, semiperimeter, measure) {
        super(area, perimeter, semiperimeter, measure)
        this.radio = {
            "value": radio,
            "process": []
        }
        this.diameter = {
            "value": diameter,
            "process": []
        }
    }
}