class SolidsRevolution extends Tridimensional {
    constructor(radio, diameter, area_great_circle, volume, area, perimeter, semiperimeter, measure) {
        super(volume, area, perimeter, semiperimeter, measure)
        this.radio = {
            "value": radio,
            "process": []
        }
        this.diameter = {
            "value": diameter,
            "process": []
        }
        this.area_great_circle = {
            "value": area_great_circle,
            "process": []
        }
    }
}