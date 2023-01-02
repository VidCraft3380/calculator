class Inputs {
    constructor(input){
        this.input = String(input)
    }
    read(){
        if(Number(this.input)){
            return this.input
        } else if(this.input.includes("/")){
            var amount = 0;
            var start = 0;
            while ((start = this.input.indexOf("/", start) + 1) > 0) {
                amount++;
            }
            var terms = String(this.input).split("/")
            if(amount === 1){
                if(Number(eval(terms[0])) && Number(eval(terms[1]))){
                    return new Fraction(undefined, Number(eval(terms[0])), Number(eval(terms[1])))
                }
            }else if(amount === 2){
                if(Number(eval(terms[0])) && Number(eval(terms[1])) && Number(eval(terms[2]))){
                    return new Fraction(Number(eval(terms[0])), Number(eval(terms[1])), Number(eval(terms[2])))
                }
            }
        }else if (Number(eval(String(this.input).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10').replace(/in/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/%/g, '/100*')))){
            return Number(eval(String(this.input).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10').replace(/in/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/%/g, '/100*')))
        }else {
            return undefined
        }
    }
}