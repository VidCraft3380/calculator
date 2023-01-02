class Fraction {
    constructor(whole, numerator, denominator) {
        this.setWhole(whole)
        this.setNumerator(numerator)
        this.setDenominator(denominator)
    }
    setNumerator(numerator) {
        this.numerator = numerator;
    }
    setDenominator(denominator) {
        if (denominator !== 0) {
            this.denominator = denominator;
        }else {
            alert("El denominador no puede ser igual a 0")
        }
    }
    setWhole(whole){
        this.whole = whole;
    }

    mixed(){
        if(this.whole != undefined){
            this.setNumerator(this.whole*this.denominator+this.numerator)
            this.setDenominator(this.denominator)
        }
    }

    plus(number){
        const result = new Fraction();

        if(typeof number == 'string' || typeof number == 'number'){
            var str = String(number).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10').replace(/in/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/%/g, '/100*')

            if(Number(eval(str))){
                var operation = Number(eval(str))

                number = new Fraction();
                number.setNumerator(operation)
                number.setDenominator(1)
                
            }
        }

        this.mixed()
        number.mixed()

        if(this.denominator == number.denominator){
            result.setNumerator(this.numerator+number.numerator)
            result.setDenominator(this.denominator)
        }else {
            result.setNumerator(this.numerator*number.denominator+this.denominator*number.numerator)
            result.setDenominator(this.denominator*number.denominator)
        }

        return result
    }

    subtraction(number){
        const result = new Fraction();

        if(typeof number == 'string' || typeof number == 'number'){
            var str = String(number).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10').replace(/in/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/%/g, '/100*')

            if(Number(eval(str))){
                var operation = Number(eval(str))

                number = new Fraction();
                number.setNumerator(operation)
                number.setDenominator(1)
                
            }
        }

        this.mixed()
        number.mixed()

        if(this.denominator == number.denominator){
            result.setNumerator(this.numerator-number.numerator)
            result.setDenominator(this.denominator)
        }else {
            result.setNumerator(this.numerator*number.denominator-this.denominator*number.numerator)
            result.setDenominator(this.denominator*number.denominator)
        }

        return result
    }

    multiplication(number){
        const result = new Fraction();

        if(typeof number == 'string' || typeof number == 'number'){
            var str = String(number).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10').replace(/in/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/%/g, '/100*')

            if(Number(eval(str))){
                var operation = Number(eval(str))

                number = new Fraction();
                number.setNumerator(operation)
                number.setDenominator(1)
                
            }
        }

        result.setNumerator(this.numerator*number.numerator)
        result.setDenominator(this.denominator*number.denominator)

        return result
    }

    division(number){
        const result = new Fraction();

        if(typeof number == 'string' || typeof number == 'number'){
            var str = String(number).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10').replace(/in/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/%/g, '/100*')

            if(Number(eval(str))){
                var operation = Number(eval(str))

                number = new Fraction();
                number.setNumerator(operation)
                number.setDenominator(1)
                
            }
        }

        result.setNumerator(this.numerator*number.denominator)
        result.setDenominator(this.denominator*number.numerator)

        return result
    }

    simplify(){
        const calc = new Calc()
        const mcd = calc.mcd(this.numerator, this.denominator);
        return new Fraction(undefined, this.numerator / mcd, this.denominator / mcd);
    }

    root(exponent){
        const result = new Fraction();

        if(typeof exponent == 'string' || typeof exponent == 'number'){
            var str = String(exponent).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10').replace(/in/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/%/g, '/100*')

            if(Number(eval(str))){
                var operation = Number(eval(str))
            }
        }

        var numerator = Math.pow(this.numerator, 1/operation)
        var denominator = Math.pow(this.denominator, 1/operation)

        if(Number.isInteger(numerator) && Number.isInteger(denominator)){
            result.setNumerator(numerator)
            result.setDenominator(denominator)
        }else {
            alert("No da numero entero")
            result.setNumerator(this.numerator)
            result.setDenominator(this.denominator)
        }
        return result
    } 

    potency(exponent){
        const result = new Fraction();

        if(typeof exponent == 'string' || typeof exponent == 'number'){
            var str = String(exponent).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10').replace(/in/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/%/g, '/100*')

            if(Number(eval(str))){
                var operation = Number(eval(str))   
                result.setNumerator(this.numerator**operation)
                result.setDenominator(this.denominator**operation)  
                return result
            }
        }else if(typeof exponent == 'object'){
            var potency = Math.min(exponent.numerator, exponent.denominator)
            var root = Math.max(exponent.numerator, exponent.denominator)
            result.setNumerator(this.numerator**potency)
            result.setDenominator(this.denominator**potency)  
            return result.root(root)
        }
    }  

    convertFraction(decimal){
        if(String(decimal).includes(".")){
            var amount = 0;
            var start = 0;
            while ((start = String(decimal).indexOf(".", start) + 1) > 0) {
                amount++;
            }
            if(amount === 1){
                var terms = String(decimal).split(".")
                var number= Number(terms[1])*1
                var digits= Number(number.toString().length)
                this.numerator = number
                var zero= "0"
                this.denominator = Number("1"+zero.repeat(digits))
                if(Number(terms[0])!=0){
                    this.whole = Number(terms[0])
                }else {
                    this.whole =undefined
                }
                return new Fraction(this.whole, this.numerator, this.denominator).display()
            }
        }else {
            return String(decimal)
        }
    }
    convertDecimal(){
        this.mixed()
        return Number(this.numerator)/Number(this.denominator)
    }

    display(){
        if(this.whole == undefined){
            this.whole = ""
        }
        return `${this.whole}${this.numerator}/${this.denominator}`
    }
    
    create(fraction){
        var amount = 0;
        var start = 0;
        while ((start = String(fraction).indexOf("/", start) + 1) > 0) {
            amount++;
        }
        if(amount === 1){
            let arr = String(fraction).split("/")
            this.setNumerator(Number(arr[0]))
            this.setDenominator(Number(arr[1]))
        }else if(amount === 2){
            let arr = String(fraction).split("/")
            this.setWhole(Number(arr[0]))
            this.setNumerator(Number(arr[1]))
            this.setDenominator(Number(arr[2]))
        }
    }
}