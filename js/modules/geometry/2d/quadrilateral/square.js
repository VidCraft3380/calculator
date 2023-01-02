class Square extends Quadrilateral {
    constructor(side, diagonal, area, perimeter, semiperimeter, measure) {
        super(diagonal, area, perimeter, semiperimeter, measure)
        this.side = {
            "value": side,
            "process": []
        }
    }
    calcSide(){
        if(this.side.value == undefined){
            if(this.diagonal.value != undefined){
                this.side.value = this.diagonal.value/Math.sqrt(2)
                this.side.process = [`l= d/√2`, `l= ${String(this.diagonal.value+this.measure)}/√2`, `l= ${String(this.side.value+this.measure)}`]
            }
            else if(this.area.value != undefined){
                this.side.value = Math.sqrt(this.area.value)
                this.side.process = [`l= √A`, `l= √${String(this.area.value+this.measure)}`, `l= ${String(this.side.value+this.measure)}`]
            }
            else if(this.perimeter.value != undefined){
                this.side.value = this.perimeter.value/4
                this.side.process = [`l= P/4`, `l= ${String(this.perimeter.value+this.measure)}/4`, `l= ${String(this.side.value+this.measure)}`]
            }
            else if(this.semiperimeter.value != undefined){
                this.side.value = this.semiperimeter.value/2
                this.side.process = [`l= P/2`, `l= ${String(this.semiperimeter.value+this.measure)}/2`, `l= ${String(this.side.value+this.measure)}`]
            }
        }
    }
    calcDiagonal(){
        if(this.diagonal.value == undefined){
            if(this.side.value != undefined){
                this.diagonal.value = this.side.value*Math.sqrt(2)
                this.diagonal.process = [`d= l•√2`, `d= ${String(this.side.value+this.measure)}•√2`, `d= ${String(this.diagonal.value+this.measure)}`]
            }
        }
    }
    calcArea(){
        if(this.area.value == undefined){
            if(this.side.value != undefined){
                this.area.value = this.side.value**2
                this.area.process = [`A= l<sup>2</sup>`, `A= (${String(this.side.value+this.measure)})<sup>2</sup>`, `A= ${String(this.area.value+this.measure+'<sup>2</sup>')}`]
            }
            else if(this.diagonal.value != undefined){
                this.area.value = this.diagonal.value**2/2
                this.area.process = [`A= d<sup>2</sup>/2`, `A= (${String(this.diagonal.value+this.measure)})<sup>2</sup>/2`, `A= ${String(this.diagonal.value**2)+this.measure}/2`, `A= ${String(this.area.value+this.measure+'<sup>2</sup>')}`]
            }
        }
    }
    calcPerimeter(){
        if(this.perimeter.value == undefined){
            if(this.side.value != undefined){
                this.perimeter.value = this.side.value*4
                this.perimeter.process = [`P= l•4`, `P= ${String(this.side.value+this.measure)}•4`, `P= ${String(this.perimeter.value+this.measure)}`]
            }
        }
    }
}