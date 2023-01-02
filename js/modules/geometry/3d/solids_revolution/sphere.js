class Sphere extends SolidsRevolution {
    constructor(radio, diameter, area_great_circle, volume, area, perimeter_great_circle, semiperimeter_great_circle, measure) {
        super(radio, diameter, area_great_circle, volume, area, perimeter_great_circle, semiperimeter_great_circle, measure)
    }
    calcRadio(){
        if(this.radio.value == undefined){
            if(this.diameter.value != undefined){
                this.radio.value = this.diameter.value/2
                this.radio.process = [`r= r/2`, `r= ${this.diameter.value}${this.measure}/2`, `r= ${this.radio.value}${this.measure}`]
            }
            else if(this.area_great_circle.value != undefined){
                this.radio.value = Math.sqrt(this.area_great_circle.value/Math.PI)
                this.radio.process = [`r= √(A<sub>1</sub>/π)`, `r= √(${this.area_great_circle.value}${this.measure}<sup>2</sup>/π)`, `r= ${this.radio.value}${this.measure}`]
            }
            else if(this.volume.value != undefined){
                var operation = this.volume.value*3/4
                this.radio.value = Math.cbrt(operation/Math.PI)
                this.radio.process = [`r= 3√(V•3/4•π)`, `r= 3√(${this.volume.value}${this.measure}<sup>3</sup>•3/4•π)`, `r= 3√(${operation}${this.measure}<sup>3</sup>/π)`, `r= ${this.radio.value}${this.measure}`]
            }
            else if(this.area.value != undefined){
                var operation = this.area.value/4
                this.radio.value = Math.sqrt(operation/Math.PI)
                this.radio.process = [`r= √(A/4•π)`, `r= √(${this.area.value}${this.measure}<sup>2</sup>/4•π)`, `r= √(${operation}${this.measure}<sup>2</sup>/π)`, `r= ${this.radio.value}${this.measure}`]
            }
            else if(this.perimeter.value != undefined){
                var operation = this.perimeter.value/2
                this.radio.value = operation/Math.PI
                this.radio.process = [`r= P/2•π`, `r= ${this.perimeter.value}${this.measure}/2•π`,`r= ${this.radio.value}${this.measure}`]
            }
            else if(this.semiperimeter.value != undefined){
                this.radio.value = this.semiperimeter.value/Math.PI
                this.radio.process = [`r= P/π`, `r= ${this.semiperimeter.value}${this.measure}/π`,`r= ${this.radio.value}${this.measure}`]
            }
        }
    }
    calcDiameter(){
        if(this.diameter.value == undefined){
            if(this.radio.value != undefined){
                this.diameter.value = this.radio.value*2
                this.diameter.process = [`d= r•2`, `r= ${this.radio.value}${this.measure}•2`, `d= ${this.diameter.value}${this.measure}`]
            }
        }
    }
    calcAreaGreatCircle(){
        if(this.area_great_circle.value == undefined){
            if(this.radio.value != undefined){
                var operation = this.radio.value**2
                this.area_great_circle.value = operation*Math.PI
                this.area_great_circle.process = [`A<sub>1</sub>= r<sup>2</sup>•π`, `A<sub>1</sub>= (${this.radio.value}${this.measure})<sup>2</sup>•π`, `A<sub>1</sub>= ${this.radio.value**2}${this.measure}<sup>2</sup>•π`, `A<sub>1</sub>= ${this.area_great_circle.value}${this.measure}<sup>2</sup>`]
            }
        }
    }
    calcArea(){
        if(this.area.value == undefined){
            if(this.radio.value != undefined){
                var operation = this.radio.value**2
                this.area.value = operation*4*Math.PI
                this.area.process = [`A= r<sup>2</sup>•4•π`, `A= (${this.radio.value}${this.measure})<sup>2</sup>•4•π`, `A= ${this.radio.value**2}${this.measure}<sup>2</sup>•4•π`, `A= ${this.area.value}${this.measure}<sup>2</sup>`]
            }
        }
    }
    calcVolume(){
        if(this.volume.value == undefined){
            if(this.radio.value != undefined){
                var operation = this.radio.value**3
                var operation2 = 4/3
                this.volume.value = operation2*Math.PI*operation
                this.volume.process = [`V= 4/3•π•r<sup>3</sup>`, `V= 4/3•π•(${this.radio.value}${this.measure})<sup>3</sup>`, `V= ${operation2}•π•${operation}${this.measure}<sup>3</sup>`, `V= ${this.volume.value}${this.measure}<sup>3</sup>`]
            }
        }
    }
    calcPerimeter(){
        if(this.perimeter.value == undefined){
            if(this.radio.value != undefined){
                this.perimeter.value = 2*Math.PI*this.radio.value
                this.perimeter.process = [`P= 2•π•r`, `P= 2•π•${this.radio.value}${this.measure}`, `P= ${this.perimeter.value}${this.measure}`]
            }
        }
    }
}