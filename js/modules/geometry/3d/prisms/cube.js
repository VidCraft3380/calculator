class Cube extends Prisms {
    constructor(edge, side_area, diagonal, volume, area, perimeter, semiperimeter, measure) {
        super(edge, side_area, diagonal, volume, area, perimeter, semiperimeter, measure)
    }
    calcEdge(){
        if(this.edge.value == undefined){
            if(this.side_area.value != undefined){
                this.edge.value = Math.sqrt(this.side_area.value/4)
                this.edge.process = [`a= √(A<sub>l</sub>/4)`, `a= √(${this.side_area.value}${this.measure}/4)`, `a= √(${this.side_area.value/4}${this.measure})`, `a= ${this.edge.value}${this.measure}`]
            }
            else if(this.diagonal.value != undefined){
                this.edge.value = this.diagonal.value/Math.sqrt(3)
                this.edge.process = [`a= d/√3`, `a= ${this.diagonal.value}${this.measure}/√3`, `a= ${this.edge.value}${this.measure}`]
            }
            else if(this.volume.value != undefined){
                this.edge.value = Math.cbrt(this.volume.value)
                this.edge.process = [`a= <sup>3</sup>√${this.volume.value}${this.measure}<sup>3</sup>`, `a= ${this.edge.value}${this.measure}`]
            }
            else if(this.area.value != undefined){
                this.edge.value = Math.sqrt(this.area.value/6)
                this.edge.process = [`a= √(A/6)`, `a= √(${this.area.value}${this.measure}/6)`, `a= √(${this.area.value/6}${this.measure})`, `a= ${this.edge.value}${this.measure}`]
            }
            else if(this.perimeter.value != undefined){
                this.edge.value = this.perimeter.value/12
                this.edge.process = [`a= P/12`, `a= ${this.perimeter.value}${this.measure}/12`, `a= ${this.edge.value}${this.measure}`]
            }
            else if(this.semiperimeter.value != undefined){
                this.edge.value = this.semiperimeter.value/6
                this.edge.process = [`a= S/6`, `a= ${this.semiperimeter.value}${this.measure}/6`, `a= ${this.edge.value}${this.measure}`]
            }
        }
    }
    calcSideArea(){
        if(this.side_area.value == undefined){
            if(this.edge.value != undefined){
                var operation =this.edge.value**2
                this.side_area.value = operation*4
                this.side_area.process = [`A<sub>l</sub>= 4•a<sup>2</sup>`, `A<sub>l</sub>= 4•(${this.edge.value}${this.measure})<sup>2</sup>`, `A<sub>l</sub>= 4•${operation}${this.measure}<sup>2</sup>`, `A<sub>l</sub>= ${this.side_area.value}${this.measure}<sup>2</sup>`]
            }
        }
    }
    calcDiagonal(){
        if(this.diagonal.value == undefined){
            if(this.edge.value != undefined){
                this.diagonal.value = this.edge.value*Math.sqrt(3)
                this.diagonal.process = [`d= a•√3`, `d= ${this.edge.value}${this.measure}•√3`, `d= ${this.diagonal.value}${this.measure}`]
            }
        }
    }
    calcArea(){
        if(this.area.value == undefined){
            if(this.edge.value != undefined){
                var operation =this.edge.value**2
                this.area.value = operation*6
                this.area.process = [`A= 6•a<sup>2</sup>`, `A= 6•(${this.edge.value}${this.measure})<sup>2</sup>`, `A= 6•${operation}${this.measure}<sup>2</sup>`, `A= ${this.area.value}${this.measure}<sup>2</sup>`]
            }
        }
    }
    calcVolume(){
        if(this.volume.value == undefined){
            if(this.edge.value != undefined){
                this.volume.value = this.edge.value**3
                this.volume.process = [`V= a<sup>3</sup>`, `V= (${this.edge.value}${this.measure})<sup>3</sup>`, `V= ${this.volume.value}${this.measure}<sup>3</sup>`]
            }
        }
    }
    calcPerimeter(){
        if(this.perimeter.value == undefined){
            if(this.edge.value != undefined){
                this.perimeter.value = this.edge.value*12
                this.perimeter.process = [`P= 12•a`, `P= 12•${this.edge.value}${this.measure}`, `P= ${this.perimeter.value}${this.measure}`]
            }
        }
    }
}