class Rectangle extends Triangles {
    constructor(side, base, height, area, perimeter, semiperimeter, measure) {
        super(base, height, area, perimeter, semiperimeter, measure)
        this.side=  {
            "value": side,
            "process": []
        }
    }
    calcSide(){
        if(this.side.value == undefined){
            if(this.height.value != undefined && this.base.value != undefined){
                const pitagoras = new Pitagoras(undefined, this.height.value,this.base.value/2, this.measure)
                pitagoras.calcHypotenuse()
                this.side.value = pitagoras.hypotenuse.value
                this.side.process = pitagoras.hypotenuse.process.concat(`a= h`)
            }
        }  
    }
    calcBase(){
        if(this.base.value == undefined){
            if(this.side.value != undefined && this.height.value != undefined){
                const pitagoras = new Pitagoras(this.side.value, this.height.value, undefined, this.measure)
                pitagoras.calcOneLeg()
                this.base.value =pitagoras.adjacent_leg.value
                this.base.process = pitagoras.adjacent_leg.process
                this.base.process.concat([`b= ca`])
            }
        }
    }
    calcHeight(){
        if(this.height.value == undefined){
            if(this.side.value != undefined && this.base.value != undefined){
                const pitagoras = new Pitagoras(this.side.value, undefined, this.base.value/2, this.measure)
                pitagoras.calcOneLeg()
                this.height.value =pitagoras.opposite_leg.value
                this.height.process = pitagoras.opposite_leg.process.concat(`c= co`)
            }
        }
    }
    calcPerimeter(){
        if(this.perimeter.value == undefined){
            if(this.side.value != undefined && this.base.value != undefined && this.height.value != undefined){
                this.perimeter.value = Number(this.side.value)+Number(this.base.value)+Number(this.height.value)
                this.perimeter.process = [`P= a+b+c`, `P= ${this.side.value}${this.measure}+${this.base.value}${this.measure}+${this.height.value}${this.measure}`, `P= ${this.perimeter.value}${this.measure}`]
            }
        }
    }
}