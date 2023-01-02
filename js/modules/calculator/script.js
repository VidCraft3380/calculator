class Calculator {
    constructor() {
        this.operation = ""
    }
    display(data){
        document.getElementById("display").innerHTML = String(document.getElementById("display").innerHTML) + String(data)
    }
    displayPotency(data){
        document.querySelector("#display sup").innerHTML = document.querySelector("#display sup").innerHTML+String(data)

        if(String(document.querySelector("#display sup").innerHTML).includes("arcsin") || String(document.querySelector("#display sup").innerHTML).includes("arccos") || String(document.querySelector("#display sup").innerHTML).includes("arctan")){
            this.exponent = String(document.querySelector("#display sup").innerHTML).replace(/√/g, 'Math.sqrt').replace(/arcsin/g, 'Math.asin').replace(/arccos/g, 'Math.acos').replace(/arctan/g, 'Math.atan')
        }else {
            this.exponent = String(document.querySelector("#display sup").innerHTML).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan')
        }
        this.exponent = String(this.exponent).replace(/log/g, 'Math.log10').replace(/In/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/, 'Math.E').replace(/%/g, '/100*').replace(/Ans/, String(document.querySelector("ansValue").innerHTML)).replace(/E/, '*10**')
    }
    potency(){
        if(String(document.getElementById("display").innerHTML).includes("arcsin") || String(document.getElementById("display").innerHTML).includes("arccos") || String(document.getElementById("display").innerHTML).includes("arctan")){
            this.operation = String(document.getElementById("display").innerHTML).replace(/√/g, 'Math.sqrt').replace(/arcsin/g, 'Math.asin').replace(/arccos/g, 'Math.acos').replace(/arctan/g, 'Math.atan')
        }else {
            this.operation = String(document.getElementById("display").innerHTML).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan')
        }
        this.operation = String(this.operation).replace(/log/g, 'Math.log10').replace(/In/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/, 'Math.E').replace(/%/g, '/100*').replace(/Ans/, String(document.getElementById("ansValue").innerHTML)).replace(/E/, '*10**')
        document.getElementById("display").innerHTML= eval(String(this.operation))+"<sup></sup>"

        var numbers = document.getElementsByClassName("number")

        for (var i=0; i< numbers.length; i++) {
            numbers[i].removeAttribute("onclick")
            numbers[i].setAttribute("onclick", `calculator.displayPotency('${numbers[i].getAttribute("name")}')`)
        }
        document.querySelector(".calc").setAttribute("onclick", `calculator.calcPotency()`)
    }
    potencyE(){
        this.operation = Math.E
        document.getElementById("display").innerHTML= "e<sup></sup>"

        var numbers = document.getElementsByClassName("number")

        for (var i=0; i< numbers.length; i++) {
            numbers[i].removeAttribute("onclick")
            numbers[i].setAttribute("onclick", `calculator.displayPotency('${numbers[i].getAttribute("name")}')`)
        }
        document.querySelector(".calc").setAttribute("onclick", `calculator.calcPotency()`)
    }
    potency10(){
        this.operation = 10
        document.getElementById("display").innerHTML= "10<sup></sup>"

        var numbers = document.getElementsByClassName("number")

        for (var i=0; i< numbers.length; i++) {
            numbers[i].removeAttribute("onclick")
            numbers[i].setAttribute("onclick", `calculator.displayPotency('${numbers[i].getAttribute("name")}')`)
        }
        document.querySelector(".calc").setAttribute("onclick", `calculator.calcPotency()`)
    }
    root(){
        if(String(document.getElementById("display").innerHTML).includes("arcsin") || String(document.getElementById("display").innerHTML).includes("arccos") || String(document.getElementById("display").innerHTML).includes("arctan")){
            this.operation = String(document.getElementById("display").innerHTML).replace(/√/g, 'Math.sqrt').replace(/arcsin/g, 'Math.asin').replace(/arccos/g, 'Math.acos').replace(/arctan/g, 'Math.atan')
        }else {
            this.operation = String(document.getElementById("display").innerHTML).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan')
        }
        this.operation = String(this.operation).replace(/log/g, 'Math.log10').replace(/In/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/, 'Math.E').replace(/%/g, '/100*').replace(/Ans/, String(document.getElementById("ansValue").innerHTML)).replace(/E/, '*10**')
        document.getElementById("display").innerHTML= "<sup></sup>√("+eval(String(this.operation))+")"

        var numbers = document.getElementsByClassName("number")

        for (var i=0; i< numbers.length; i++) {
            numbers[i].removeAttribute("onclick")
            numbers[i].setAttribute("onclick", `calculator.displayPotency('${numbers[i].getAttribute("name")}')`)
        }
        document.querySelector(".calc").setAttribute("onclick", `calculator.calcRoot()`)
    }
    delete(){
        document.getElementById("display").innerHTML = ""
    }
    calc(){
        if(String(document.getElementById("display").innerHTML).includes("arcsin") || String(document.getElementById("display").innerHTML).includes("arccos") || String(document.getElementById("display").innerHTML).includes("arctan")){
            this.operation = String(document.getElementById("display").innerHTML).replace(/√/g, 'Math.sqrt').replace(/arcsin/g, 'Math.asin').replace(/arccos/g, 'Math.acos').replace(/arctan/g, 'Math.atan')
        }else {
            this.operation = String(document.getElementById("display").innerHTML).replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan')
        }
        this.operation = String(this.operation).replace(/log/g, 'Math.log10').replace(/In/g, 'Math.log').replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/i, '**').replace(/π/g, 'Math.PI').replace(/e/, 'Math.E').replace(/%/g, '/100*').replace(/Ans/, String(document.getElementById("ansValue").innerHTML)).replace(/E/, '*10**')

        document.getElementById("display").innerHTML= String(eval(this.operation))
        document.getElementById("ansValue").innerHTML= String(eval(this.operation))
    }
    calcPotency(){
        this.operation = Math.pow(Number(eval(this.operation)), Number(eval(this.exponent)))
        document.getElementById("display").innerHTML = String(eval(this.operation))
        document.getElementById("ansValue").innerHTML= String(eval(this.operation))

        var numbers = document.getElementsByClassName("number")

        for (var i=0; i< numbers.length; i++) {
            numbers[i].setAttribute("onclick", `calculator.display('${numbers[i].getAttribute("name")}')`)
        }
        document.querySelector(".calc").setAttribute("onclick", `calculator.calc()`)
    }
    calcRoot(){
        if(Number(eval(this.exponent)) === 3){
            this.operation = Math.cbrt(Number(eval(this.operation)))
        }else {
            this.operation = Math.pow(Number(eval(this.operation)), 1/Number(eval(this.exponent)))
        }
        document.getElementById("display").innerHTML = String(eval(this.operation))
        document.getElementById("ansValue").innerHTML= String(eval(this.operation))

        var numbers = document.getElementsByClassName("number")

        for (var i=0; i< numbers.length; i++) {
            numbers[i].setAttribute("onclick", `calculator.display('${numbers[i].getAttribute("name")}')`)
        }
        document.querySelector(".calc").setAttribute("onclick", `calculator.calc()`)
    }
    inv(){
        var names= ["e", "sin<sup>-1</sup>", "cos<sup>-1</sup>", "tan<sup>-1</sup>", "e<sup>x</sup>",  "10<sup>x</sup>", "<sup>y</sup>√x",  "EXP"]
        var values= ["e", "arcsin(", "arccos(", "arctan(", undefined, undefined, undefined, "E"]
        var buttons = document.getElementsByClassName("change")
        for (var i=0; i< buttons.length; i++) {
            buttons[i].innerHTML = names[i]
            buttons[i].setAttribute("onclick", `calculator.display('${values[i]}')`)
        }
        buttons[4].setAttribute("onclick", `calculator.potencyE()`)
        buttons[5].setAttribute("onclick", `calculator.potency10()`)
        buttons[6].setAttribute("onclick", `calculator.root()`)
        document.getElementById("inv").setAttribute("onclick", `calculator.original()`)
    }
    original(){
        var names= ["In", "cos", "tan", "sin",  "log", "√",  "x<sup>y</sup>", "π"]
        var values= ["In(", "cos(", "tan(", "sin(",  "log(", "√",  "", "π"]
        var buttons = document.getElementsByClassName("change")
        for (var i=0; i< buttons.length; i++) {
            buttons[i].innerHTML = names[i]
            buttons[i].setAttribute("onclick", `calculator.display('${values[i]}')`)
        }
        document.querySelector(".potency").setAttribute("onclick", `calculator.potency()`)
        document.getElementById("inv").setAttribute("onclick", `calculator.inv()`)
    }
    key(event){
        var key = event.keyCode;
        if(key==48) {
            calculator.display("0")
        }
        else if(key==49) {
            calculator.display("1")
        }
        else if(key==50) {
            calculator.display("2")
        }
        else if(key==51) {
            calculator.display("3")
        }
        else if(key==52) {
            calculator.display("4")
        }
        else if(key==53) {
            calculator.display("5")
        }
        else if(key==54) {
            calculator.display("6")
        }
        else if(key==55) {
            calculator.display("7")
        }
        else if(key==56) {
            calculator.display("8")
        }
        else if(key==57) {
            calculator.display("9")
        }
        else if(key==96) {
            calculator.display("0")
        }
        else if(key==97) {
            calculator.display("1")
        }
        else if(key==98) {
            calculator.display("2")
        }
        else if(key==99) {
            calculator.display("3")
        }
        else if(key==100) {
            calculator.display("4")
        }
        else if(key==101) {
            calculator.display("5")
        }
        else if(key==102) {
            calculator.display("6")
        }
        else if(key==103) {
            calculator.display("7")
        }
        else if(key==104) {
            calculator.display("8")
        }
        else if(key==105) {
            calculator.display("9")
        }
        else if(key==106) {
            calculator.display("x")
        }
        else if(key==107) {
            calculator.display("+")
        }
        else if(key==109) {
            calculator.display("-")
        }
        else if(key==111) {
            calculator.display("/")
        }
        else if(key==110) {
            calculator.display(".")
        }
        else if(key==190) {
            calculator.display(".")
        }
        else if(key==13) {
            calculator.calc()
        }
        else if(key==8) {
            calculator.delete()
        }
    }
}
const calculator = new Calculator
window.onkeydown=calculator.key;