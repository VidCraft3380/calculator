class Progressions extends Finance {
    constructor(progression, a1, an, number){
        super()
        this.progression = progression
        this.a1 = a1
        this.a2 = 0
        this.an = {
            "value": an,
            "process": []
        }
        this.number = {
            "value": number,
            "process": []
        }
        this.plus = {
            "value": 0,
            "process": []
        }
    }
}