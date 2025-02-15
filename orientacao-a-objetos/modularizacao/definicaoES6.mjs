export function area(r) { return Math.PI * r ** 2 };
export function circunferencia(r) { return 2 * Math.PI * r };

export class Circulo {
    constructor(r) {
        this.raio = r;
    }

    area() {
        return Math.PI * this.raio ** 2;
    }

    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
}
