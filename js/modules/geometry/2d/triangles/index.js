class Triangles extends Bidimensional {
    constructor(base, height, area, perimeter, semiperimeter, measure) {
        super(area, perimeter, semiperimeter, measure)
        this.base = {
            "value": base,
            "process": []
        }
        this.height = {
            "value": height,
            "process": []
        }
    }
    calcArea(){
        if(this.area.value == undefined){
            if(this.base.value != undefined && this.height.value != undefined){
                this.area.value = this.base.value*this.height.value/2
                this.area.process = [`A= b•h/2`, `A= ${this.base.value}${this.measure}•${this.height.value}${this.measure}/2`, `A= ${this.base.value*this.height.value}${this.measure}/2`, `A= ${this.area.value}${this.measure}<sup>2</sup>`]
            }
        }
    }
}