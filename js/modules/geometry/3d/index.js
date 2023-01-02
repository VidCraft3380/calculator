class Tridimensional extends Bidimensional {
    constructor(volume, area, perimeter, semiperimeter, measure) {
        super(area, perimeter, semiperimeter, measure)
        this.volume = {
            "value": volume,
            "process": []
        }
    }
}