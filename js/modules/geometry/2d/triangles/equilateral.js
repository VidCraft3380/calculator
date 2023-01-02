class Equilateral extends Triangles {
    constructor(side, height, area, perimeter, semiperimeter, measure) {
        super(side, height, area, perimeter, semiperimeter, measure)
        this.side = {
            "value": side,
            "process": []
        }
    }
    calcSide(){
        if(this.side.value == undefined){
            if(this.perimeter.value != undefined){
                this.side.value = this.perimeter.value/3
                this.side.process = [`l= P/3`, `l= ${String(this.perimeter.value+this.measure)}/3`, `l= ${String(this.side.value+this.measure)}`]
            }
            else if(this.semiperimeter.value != undefined){
                this.side.value = this.semiperimeter.value/1.5
                this.side.process = [`l= P/1.5`, `l= ${String(this.semiperimeter.value+this.measure)}/1.5`, `l= ${String(this.side.value+this.measure)}`]
            }
        }
    }
    calcHeight(){
        if(this.height.value == undefined){
            if(this.side.value != undefined){
                const pitagoras = new Pitagoras(this.side.value, undefined, this.side.value/2, this.measure)
                pitagoras.calcOneLeg()
                this.height.value =pitagoras.opposite_leg.value
                this.height.process = pitagoras.opposite_leg.process.concat(`h= co`)
            }
        }
    }
    calcPerimeter(){
        if(this.perimeter.value == undefined){
            if(this.side.value != undefined){
                this.perimeter.value = this.side.value*3
                this.perimeter.process = [`P= l•3`, `P= ${String(this.side.value+this.measure)}•3`, `P= ${String(this.perimeter.value+this.measure)}`]
            }
        }
    }
}