class Figure {
    constructor(perimeter, semiperimeter, measure){
        this.perimeter = {
            "value": perimeter,
            "process": []
        }
        this.semiperimeter = {
            "value": semiperimeter,
            "process": []
        }
        this.measure = measure
    }
    calcSemiperimeter(){
        if(this.semiperimeter.value == undefined){
            if(this.perimeter.value != undefined){
                this.semiperimeter.value = this.perimeter.value/2
                this.semiperimeter.process = [`S= P/2`, `S= ${String(this.perimeter.value+this.measure)}/2`, `S= ${String(this.semiperimeter.value+this.measure)}`]
            }
        }
    }
}