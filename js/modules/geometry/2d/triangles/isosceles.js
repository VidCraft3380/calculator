class Isosceles extends Triangles {
    constructor(base, legs, height, area, perimeter, semiperimeter, measure) {
        super(base, height, area, perimeter, semiperimeter, measure)
        this.legs = {
            "value": legs,
            "process": []
        }
    }
    calcBase(){
        if(this.base.value == undefined){
            if(this.legs.value != undefined && this.height.value != undefined){
                const pitagoras = new Pitagoras(this.legs.value, this.height.value, undefined, this.measure)
                pitagoras.calcOneLeg()
                this.base.value =pitagoras.adjacent_leg.value
                this.base.process = pitagoras.adjacent_leg.process
                this.base.process.concat([`b= ca`])
            }
            else if(this.area.value != undefined && this.height.value != undefined){
                this.base.value = 2*this.area.value/this.height.value
                this.base.process = [`A= b•h/2`, `b= 2•A/h`, `b= 2•${this.area.value}${this.measure}<sup><s>2</s></sup>/${this.height.value}`, `b= ${this.area.value*2}${this.measure}/${this.height.value}`, `b= ${this.base.value}${this.measure}`]
            }
        }
    }
    calcHeight(){
        if(this.height.value == undefined){
            if(this.legs.value != undefined && this.base.value != undefined){
                const pitagoras = new Pitagoras(this.legs.value, undefined, this.base.value/2, this.measure)
                pitagoras.calcOneLeg()
                this.height.value =pitagoras.opposite_leg.value
                this.height.process = pitagoras.opposite_leg.process.concat(`h= co`)
            }
            else if(this.area.value != undefined && this.base.value != undefined){
                this.height.value = 2*this.area.value/this.base.value
                this.height.process = [`A= b•h/2`, `h= 2•A/b`, `h= 2•${this.area.value}${this.measure}<sup><s>2</s></sup>/${this.base.value}`, `h= ${this.area.value*2}${this.measure}/${this.base.value}`, `h= ${this.height.value}${this.measure}`]
            }
        }
    }
    calcLegs(){
        if(this.legs.value == undefined){
            if(this.base.value != undefined && this.height.value != undefined){
                const pitagoras = new Pitagoras(undefined, this.height.value, this.base.value/2, this.measure)
                pitagoras.calcHypotenuse()
                this.legs.value =pitagoras.hypotenuse.value
                this.legs.process = pitagoras.hypotenuse.process.concat(`x= h`)
            }
        }
    }
    calcPerimeter(){
        if(this.perimeter.value == undefined){
            if(this.legs.value != undefined && this.base.value != undefined){
                this.perimeter.value = this.legs.value*2+Number(this.base.value)
                this.perimeter.process = [`P= 2•x+b`, `P= 2•${this.legs.value}${this.measure}+${this.base.value}`, `P= ${this.legs.value*2}+${this.base.value}`, `P= ${this.perimeter.value}`]
            }
        }
    }
}