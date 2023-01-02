class Circle extends Circumference {
    constructor(radio, diameter, area, perimeter, semiperimeter, measure) {
        super(radio, diameter, area, perimeter, semiperimeter, measure)
    }
    calcRadio(){
        if(this.radio.value == undefined){
            if(this.diameter.value != undefined){
                this.radio.value = this.diameter.value/2
                this.radio.process = [`d= r/2`, `d= ${this.diameter.value}${this.measure}/2`, `d= ${this.radio.value}${this.measure}`]
            }
            else if(this.area.value != undefined){
                var operation = this.area.value/Math.PI
                this.radio.value = Math.sqrt(operation)
                this.radio.process = [`A= r<sup>2</sup>•π`, `r<sup>2</sup>= A/π`, `√r<sup>2</sup>= √A/π`, `r= √A/π`, `r= ${this.area.value}${this.measure}/π`, `r= √${this.area.value}${this.measure}/π`, `r= √${operation}${this.measure}`, `r= ${this.radio.value}${this.measure}`]
            }
            else if(this.perimeter.value != undefined){
                this.radio.value = this.perimeter.value/6.28
                this.radio.process = [`P= 2π•r`, `r= P/2π`, `r= ${this.perimeter.value}${this.measure}/2π`, `r= ${this.radio.value}${this.measure}`]
            }
            else if(this.semiperimeter.value != undefined){
                this.calcPerimeter()
                this.radio.value = this.perimeter.value/Math.PI
                this.radio.process = [`S= π•r`, `r= S/π`, `r= ${this.perimeter.value}${this.measure}/π`, `r= ${this.radio.value}${this.measure}`]
            }
        }
    }
    calcDiameter(){
        if(this.diameter.value == undefined){
            if(this.radio.value != undefined){
                this.diameter.value = this.radio.value*2
                this.diameter.process = [`d= r•2`, `d= ${this.radio.value}${this.measure}•2`, `d= ${this.diameter.value}${this.measure}`]
            }
        }
    }
    calcArea(){
        if(this.area.value == undefined){
            if(this.radio.value != undefined){
                this.area.value = this.radio.value**2*Math.PI
                this.area.process = [`A= π•r<sup>2</sup>`, `A= π•(${this.radio.value}${this.measure})<sup>2</sup>`, `A= π•(${this.radio.value**2}${this.measure})`, `A= ${this.area.value}${this.measure}<sup>2</sup>`]
            }
            else if(this.diameter.value != undefined){
                this.area.value = Math.PI*this.diameter.value**2/4
                this.area.process = [`A= π•d<sup>2</sup>/4`, `A= π•(${this.diameter.value}${this.measure})<sup>2</sup>/4`, `A= π•(${this.diameter.value**2}${this.measure})/4`, `A= π•(${this.diameter.value**2/4}${this.measure})`, `A= ${this.area.value}${this.measure}<sup>2</sup>`]
            }
        }
    }
    calcPerimeter(){
        if(this.perimeter.value == undefined){
            if(this.radio.value != undefined){
                this.perimeter.value = 2*Math.PI*this.radio.value
                this.perimeter.process = [`P= 2π•r`, `P= 2π•${this.radio.value}${this.measure}`, `P= ${this.perimeter.value}${this.measure}`]
            }
            else if(this.diameter.value != undefined){
                this.perimeter.value = Math.PI*this.diameter.value
                this.perimeter.process = [`A= π•d`, `A= π•${this.diameter.value}${this.measure}`, `A= π•${this.perimeter.value}${this.measure}`]
            }
            else if(this.semiperimeter.value != undefined){
                this.perimeter.value = this.semiperimeter.value*2
                this.perimeter.process = [`P= P•2`, `P= ${this.perimeter.value}${this.measure}•2`, `P= π•${this.perimeter.value}${this.measure}`]
            }
        }
    }
}