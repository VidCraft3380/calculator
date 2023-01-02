class Arithmetic extends Progressions {
    constructor(progression, a1, an, difference, number){
        super(progression, a1, an, number)
        this.difference = {
            "value": difference,
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
        var result="";
        var next=0;
        if(typeof this.a1 === "object"){
            this.a1= this.a1.convertDecimal()
        }
        next= Number(this.a1)
        for(let i=0;i<Number(this.number.value);i++){
            result= result+next+', ';
            next= next+Number(this.difference.value);
        }
        return result.substr(0, result.length - 1)+'...'
    }
    calcDifference(){
        if(this.difference.value==undefined){
            this.difference.value = this.a2-this.a1
            this.difference.process = [`d= A<sub>2</sub>-A<sub>1</sub>`, `d= ${String(this.a2)}-${String(this.a1)}`, `d= ${String(this.difference.value)}`]
        } 
        if(typeof this.difference.value === "object"){
            this.difference.value= this.difference.value.convertDecimal()
        }
    }
    calcNumber(){
        if(this.number.value==undefined){
            if(typeof this.a1 === "object"){
                this.a1= this.a1.convertDecimal()
            }
            if(typeof this.an.value === "object"){
                this.an.value= this.an.value.convertDecimal()
            }
            var operation=this.an.value-this.a1
            var operation2= operation/this.difference.value
            this.number.value = Math.round(operation2+1)
            this.number.process = [`n= (A<sub>n</sub>-A<sub>1</sub>/d)+1`, `n= (${String(this.an.value)}-${String(this.a1)}/${String(this.difference.value)})+1`, `n= (${String(operation)}/${String(this.difference.value)})+1`, `n= (${String(operation2)})+1`, `n= ${String(this.number.value)}`]
        }
        this.number.value = Math.round(this.number.value)
    }
    calcAn(){
        if(this.an.value == undefined){
            var operation=this.number.value-1
            var operation2= operation*this.difference.value
            this.an.value = Number(this.a1)+Number(operation2)
            this.an.process = [`A<sub>n</sub>= A<sub>1</sub>+(n-1)•d`, `A<sub>${String(this.number.value)}</sub>= ${String(this.a1)}+(${String(this.number.value)}-1)•${String(this.difference.value)}`, `A<sub>${String(this.number.value)}</sub>= ${String(this.a1)}+(${String(operation)})•${String(this.difference.value)}`, `A<sub>${String(this.number.value)}</sub>= ${String(this.a1)}+(${String(operation2)})`, `A<sub>${String(this.number.value)}</sub>= ${String(this.an.value)}`]
        }
    }
    calcPlus(){
        var operation=Number(this.a1)+Number(this.an.value);
        var operation2=operation/2;
        this.plus.value = Number(operation2)*Number(this.number.value)
        this.plus.process = [`S<sub>n</sub>= (A<sub>1</sub>+A<sub>n</sub>)•(n)/2`, `S<sub>${String(this.number.value)}</sub>= (${String(this.a1)}+${String(this.an.value)})•(${String(this.number.value)})/2`, `S<sub>${String(this.number.value)}</sub>= (${String(operation)})•(${String(this.number.value)})/2`, `S<sub>${String(this.number.value)}</sub>= (${String(Number(operation)*Number(this.number.value))})/2`, `S<sub>${String(this.number.value)}</sub>= ${String(this.plus.value)}`]
    }
}