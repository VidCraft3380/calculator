class Triangle extends Triangles {
    constructor(sideA, sideB, sideC, height, area, perimeter, semiperimeter, measure) {
        super(sideB, height, area, perimeter, semiperimeter, measure)
        this.sideA=  {
            "value": sideA,
            "process": []
        }
        this.sideC=  {
            "value": sideC,
            "process": []
        }
    }
    calcSideA(){
        if(this.sideA.value == undefined){
            this.calcBase()
            this.calcHeight()
            if(this.base.value != undefined && this.sideC.value != undefined && this.height.value != undefined){
                this.sideA.value = this.height.value*this.sideC.value/this.base.value
                this.sideA.process = [`a•b= c•h`, `a= c•h/b`, `a= ${this.sideC.value}${this.measure}•${this.height.value}${this.measure}/${this.base.value}`, `a= ${this.sideC.value*this.height.value}${this.measure}<sup>2</sup>/${this.base.value}`, `a= ${this.sideA.value}${this.measure}`]
            }
        }  
    }
    calcBase(){
        if(this.base.value == undefined){
            if(this.sideA.value != undefined && this.sideC.value != undefined && this.height.value != undefined){
                this.base.value = this.height.value*this.sideC.value/this.sideA.value
                this.base.process = [`a•b= c•h`, `b= c•h/b`, `b= ${this.sideC.value}${this.measure}•${this.height.value}${this.measure}/${this.sideA.value}`, `b= ${this.sideC.value*this.height.value}${this.measure}<sup>2</sup>/${this.sideA.value}`, `b= ${this.base.value}${this.measure}`]

            }else if(this.area.value != undefined){
                this.base.value = 2*this.area.value/this.height.value
                this.base.process = [`A= b•h/2`, `b= 2•A/h`, `b= 2•${this.area.value}${this.measure}<sup><s>2</s></sup>/${this.height.value}`, `b= ${this.area.value*2}${this.measure}/${this.height.value}`, `b= ${this.base.value}${this.measure}`]
            }
        }
    }
    calcSideC(){
        if(this.sideC.value == undefined){
            if(this.base.value != undefined && this.sideA.value != undefined){
                const pitagoras = new Pitagoras(undefined, this.sideA.value, this.base.value, this.measure)
                pitagoras.calcHypotenuse()
                this.sideC.value =pitagoras.hypotenuse.value
                this.sideC.process = pitagoras.hypotenuse.process.concat(`c= h`)
            }
        }
    }
    calcHeight(){
        if(this.height.value == undefined){
            if(this.sideA.value != undefined && this.base.value != undefined && this.sideC.value != undefined){
                this.height.value = this.sideA.value*this.base.value/this.sideC.value
                this.height.process = [`a•b= c•h`, `h= a•b/c`, `h= ${this.sideA.value}${this.measure}•${this.base.value}${this.measure}/${this.sideC.value}`, `h= ${this.sideA.value*this.base.value}${this.measure}<sup>2</sup>/${this.sideC.value}`, `h= ${this.height.value}${this.measure}`]
            }else if(this.area.value != undefined){
                this.height.value = 2*this.area.value/this.base.value
                this.height.process = [`A= b•h/2`, `h= 2•A/b`, `h= 2•${this.area.value}${this.measure}<sup><s>2</s></sup>/${this.base.value}`, `h= ${this.area.value*2}${this.measure}/${this.base.value}`, `h= ${this.height.value}${this.measure}`]
            }
        }
    }
    calcPerimeter(){
        if(this.perimeter.value == undefined){
            if(this.sideA.value != undefined && this.base.value != undefined && this.sideC.value != undefined){
                this.perimeter.value = Number(this.sideA.value)+Number(this.base.value)+Number(this.sideC.value)
                this.perimeter.process = [`P= a+b+c`, `P= ${this.sideA.value}${this.measure}+${this.base.value}${this.measure}+${this.sideC.value}${this.measure}`, `P= ${this.perimeter.value}${this.measure}`]
            }
        }
    }
}