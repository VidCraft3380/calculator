class Geometric extends Progressions {
    constructor(progression, a1, an, reason, number){
        super(progression, a1, an, number)
        this.reason = {
            "value": reason,
            "process": []
        }
    }
    calcProgression(){
        if(this.progression != undefined){
            let arr = this.progression.split(',');
            this.a1 = new Inputs(String(arr[0])).read()
            if(typeof this.a1 === "object"){
                this.a1= this.a1.convertDecimal()
            }
            this.a2 = new Inputs(String(arr[1])).read()
            if(typeof this.a2 === "object"){
                this.a2= this.a2.convertDecimal()
            }
        }
    }
    calcGenerate(){
        var result=""                                      
        var next=0
        if(typeof this.a1 === "object"){
            this.a1= this.a1.convertDecimal()
        }
        next=this.a1
        for(let i=0;i<Number(this.number.value);i++){
            result= result+next+", "
            next=+next * +Number(this.reason.value)
        }
        return result.substr(0, result.length - 1)+'...'
    }
    calcReason(){
        if(this.reason.value==undefined){
            this.reason.value = this.a2/this.a1
            this.reason.process = [`r= A<sub>2</sub>/A<sub>1</sub>`, `r= ${String(this.a2)}/${String(this.a1)}`, `r= ${String(this.reason.value)}`]
        }
        if(typeof this.reason.value === "object"){
            this.reason.value= this.reason.value.convertDecimal()
        }
    }
    calcNumber(){
        if(this.number.value==undefined){
            var operation= this.a1/this.an.value
            var operation2= Math.log10(operation)
            var operation3= Math.log10(this.reason.value)
            var operation4= operation2/operation3
            this.number.value = Math.round(operation4+1)
            this.number.process = [`n= 1+log(A<sub>1</sub>/A<sub>n</sub>)/log(r)`, `n= 1+log(${String(this.a1)}/${String(this.an.value)})/log(${String(this.reason.value)})`, `n= 1+log(${String(operation)})/log(${String(this.reason.value)})`, `n= 1+${String(operation2)}/${String(operation3)}`, `n= 1+${String(operation4)}`, `n= ${String(this.number.value)}`]
        }
    }
    calcAn(){
        if(this.an.value == undefined){
            var operation=this.number.value-1
            var operation2=this.reason.value**operation
            this.an.value = Number(this.a1)*Number(operation2)
            this.an.process = [`A<sub>n</sub>= A<sub>1</sub>•r<sup>n-1</sup>`, `A<sub>${String(this.number.value)}</sub>= A<sub>1</sub>•${String(this.reason.value)}<sup>${String(this.number.value)}-1</sup>`, `A<sub>${String(this.number.value)}</sub>= A<sub>1</sub>•${String(this.reason.value)}<sup>${String(operation)}</sup>`, `A<sub>${String(this.number.value)}</sub>= A<sub>1</sub>•${String(operation2)}`, `A<sub>${String(this.number.value)}</sub>= ${String(this.an.value)}`]
        }
    }
    calcPlus(){
        var operation= Number(this.reason.value)**Number(this.number.value);
        var operation2= operation-1
        var operation3= Number(this.reason.value)-1
        var operation4= operation2/operation3
        this.plus.value = Number(this.reason.value)*operation4
        this.plus.process = [`S<sub>n</sub>= A<sub>1</sub>•r<sup>n</sup>-1/r-1`, `S<sub>${String(this.number.value)}</sub>= ${String(this.a1)}•${String(this.reason.value)}<sup>${String(this.number.value)}</sup>-1/${String(this.reason.value)}-1`, `S<sub>${String(this.number.value)}</sub>= ${String(this.a1)}•${String(operation)}-1/${String(this.reason.value)}-1`, `S<sub>${String(this.number.value)}</sub>= ${String(this.a1)}•${String(operation2)}/${String(this.reason.value)}-1`, `S<sub>${String(this.number.value)}</sub>= ${String(this.a1)}•${String(operation2)}/${String(operation3)}`,  `S<sub>${String(this.number.value)}</sub>= ${String(this.a1)}•${String(operation4)}`, `S<sub>${String(this.number.value)}</sub>= ${String(this.plus.value)}`]
    }
}