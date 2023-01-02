class Pitagoras {
    constructor(hypotenuse, opposite_leg, adjacent_leg, measure){
        this.hypotenuse=  {
            "value": hypotenuse,
            "process": []
        }
        this.adjacent_leg=  {
            "value": adjacent_leg,
            "process": []
        }
        this.opposite_leg=  {
            "value": opposite_leg,
            "process": []
        }
        this.measure = measure
    }
    calcHypotenuse(){
        if(this.hypotenuse.value == undefined){
            var operation = this.adjacent_leg.value**2+this.opposite_leg.value**2
            this.hypotenuse.value = Math.sqrt(operation)
            this.hypotenuse.process = [`h<sup>2</sup>= co<sup>2</sup>+ca<sup>2</sup>`, `h<sup>2</sup>= (${this.opposite_leg.value}${this.measure})<sup>2</sup>+(${this.adjacent_leg.value}${this.measure})<sup>2</sup>`, `h<sup>2</sup>= (${operation}${this.measure})`, `√h<sup>2</sup>= √(${operation}${this.measure})`, `h= ${this.hypotenuse.value}${this.measure}`]
        } 
    }
    calcOneLeg(){
        if(this.adjacent_leg.value == undefined){
            var operation = this.hypotenuse.value**2-this.opposite_leg.value**2
            this.adjacent_leg.value = Math.sqrt(operation)
            this.adjacent_leg.process = [`ca<sup>2</sup>= h<sup>2</sup>-co<sup>2</sup>`, `ca<sup>2</sup>= (${this.hypotenuse.value}${this.measure})<sup>2</sup>-(${this.opposite_leg.value}${this.measure})<sup>2</sup>`, `ca<sup>2</sup>= (${operation}${this.measure})`, `√ca<sup>2</sup>= √(${operation}${this.measure})`, `ca= ${this.hypotenuse.value}${this.measure}`]
        }
        if(this.opposite_leg.value == undefined){
            var operation = this.hypotenuse.value**2-this.adjacent_leg.value**2
            this.opposite_leg.value = Math.sqrt(operation)
            this.opposite_leg.process = [`co<sup>2</sup>= h<sup>2</sup>-ca<sup>2</sup>`, `co<sup>2</sup>= (${this.hypotenuse.value}${this.measure})<sup>2</sup>-(${this.adjacent_leg.value}${this.measure})<sup>2</sup>`, `co<sup>2</sup>= (${operation}${this.measure})`, `√co<sup>2</sup>= √(${operation}${this.measure})`, `co= ${this.opposite_leg.value}${this.measure}`]
        } 
    }
}