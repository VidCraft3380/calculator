class Prisms extends Tridimensional {
    constructor(edge, side_area, diagonal, volume, area, perimeter, semiperimeter, measure) {
        super(volume, area, perimeter, semiperimeter, measure)
        this.edge = {
            "value": edge,
            "process": []
        }
        this.side_area = {
            "value": side_area,
            "process": []
        }
        this.diagonal = {
            "value": diagonal,
            "process": []
        }
    }
}