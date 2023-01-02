class Bidimensional extends Figure {
    constructor(area, perimeter, semiperimeter, measure) {
        super(perimeter, semiperimeter, measure)
        this.area = {
            "value": area,
            "process": []
        }
    }
}