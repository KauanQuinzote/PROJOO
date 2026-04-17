class Universidade {
    nome: string;
    local: string;

    constructor(nome: string, local: string) {
        this.nome = nome;
        this.local = local;
    }
}

class Medidor {
    temperatura: number;
    ph: number;
    pressaoAtmosferica: number;
    umidadeRelativaDoAr: number;

    constructor(temperatura: number, ph: number, pressaoAtmosferica: number, umidadeRelativaDoAr: number) {
        this.temperatura = temperatura;
        this.ph = ph;
        this.pressaoAtmosferica = pressaoAtmosferica;
        this.umidadeRelativaDoAr = umidadeRelativaDoAr;
    }
}
