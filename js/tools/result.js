class Result {
    constructor(result, box){
        this.result = result;
        this.box  = box
    }
    display(){
        document.querySelector(this.box).innerHTML = ""
        for (let i = 0; i < this.result.length; i++) {
            document.querySelector(this.box).innerHTML += `<li class="list__item">${this.result[i]}</li>`;
        };
    }
    process(){
        var divs = document.getElementsByClassName("item__process");

        for (var i=0; i< divs.length; i++) {
            var str = String(divs[i].innerHTML);
            str=str.replace(/,/g,"<br>");
            divs[i].innerHTML= str
        }
    }
    resultResponse(key, value, process){
        return `<div class="item__key"><b>${key}: </b></div><div class="item__value">Resultado= ${value}</div><div class="item__process">${process}</div>`
    }
}