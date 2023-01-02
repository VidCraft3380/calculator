class Calc {
    mcd(a, b) {
        let temporal;
        while (b != 0) {
            temporal = b;
            b = a % b;
            a = temporal;
        }
        return a;
    }

    mcm(a, b) {
        return (a * b) / this.mcd(a, b);
    }
}