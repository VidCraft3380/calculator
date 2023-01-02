class Rectangle extends Quadrilateral {
    constructor(base, height, diagonal, area, perimeter, semiperimeter, measure) {
        super(diagonal, area, perimeter, semiperimeter, measure)
        this.base = {
            "value": base,
            "process": []
        }
        this.height = {
            "value": height,
            "process": []
        }
    }
    calcBase(){
        if(this.base.value == undefined){
            if(this.diagonal.value != undefined && this.height.value != undefined){
                const pitagoras = new Pitagoras(this.diagonal.value, this.height.value, undefined, this.measure)
                pitagoras.calcOneLeg()
                this.base.value =pitagoras.adjacent_leg.value
                this.base.process = pitagoras.adjacent_leg.process.concat(`b= ca`)
            }
        } 
    }
    calcHeight(){
        if(this.height.value == undefined){
            if(this.diagonal.value != undefined && this.base.value != undefined){
                const pitagoras = new Pitagoras(this.diagonal.value, undefined, this.base.value, this.measure)
                pitagoras.calcOneLeg()
                this.height.value =pitagoras.opposite_leg.value
                this.height.process = pitagoras.opposite_leg.process.concat(`h= co`)
            }
        } 
    }
    calcDiagonal(){
        if(this.diagonal.value == undefined){
            if(this.height.value != undefined && this.base.value != undefined){
                const pitagoras = new Pitagoras(undefined, this.height.value, this.base.value, this.measure)
                pitagoras.calcHypotenuse()
                this.diagonal.value =pitagoras.hypotenuse.value
                this.diagonal.process = pitagoras.hypotenuse.process.concat(`d= h`)
            }
        } 
    }
    calcArea(){
        if(this.area.value == undefined){
            if(this.base.value != undefined && this.height.value){
                this.area.value = this.height.value*this.base.value
                this.area.process = [`A= b•h`, `A= ${this.base.value}${this.measure}•${this.height.value}${this.measure}`, `A= ${this.area.value}${this.measure}<sup>2</sup>`]
            }
        }
    }
    calcPerimeter(){
        if(this.perimeter.value == undefined){
            if(this.base.value != undefined && this.height.value){
                this.perimeter.value = this.base.value*2+this.height.value*2
                this.perimeter.process = [`P= 2b+2h`, `P= 2(${this.base.value}${this.measure})+2(${this.height.value}${this.measure})`, `P= ${this.base.value*2}${this.measure}+${this.height.value*2}${this.measure}`, `P= ${this.perimeter.value}${this.measure}`]
            }
        }
    }
}