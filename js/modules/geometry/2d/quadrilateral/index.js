class Quadrilateral extends Bidimensional {
    constructor(diagonal, area, perimeter, semiperimeter, measure) {
        super(area, perimeter, semiperimeter, measure)
        this.diagonal = {
            "value": diagonal,
            "process": []
        }
    }
}