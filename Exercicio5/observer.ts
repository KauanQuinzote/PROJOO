
interface Observer {
    update(subject: Subject): void;
}

export interface IObserver extends Observer {}

export abstract class Subject {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    /* essa função é responsavel pelo callback*/
    notify(): void {
        for (const observer of this.observers) {
            /* função de callback*/
            observer.update(this);
        }
    }
}
/* Sujeito observador */
export class Universidade implements Observer {
    private nome: string;
    private local: string;
    private medidores: Medidor[];

    constructor(nome: string, local: string) {
        this.nome = nome;
        this.local = local;
        this.medidores = [];
    }

    update(subject: Subject): void {
        if (subject instanceof Medidor) {
            console.log(`Universidade ${this.nome} recebeu atualização: Temperatura: ${subject.temperaturaValue}, pH: ${subject.phValue}, Pressão Atmosférica: ${subject.pressaoAtmosfericaValue}, Umidade Relativa do Ar: ${subject.umidadeRelativaDoArValue}`);
            this.medidores.push(subject);
        }   
    }
}

export class Medidor extends Subject {
    private temperatura: number;
    private ph: number;
    private pressaoAtmosferica: number;
    private umidadeRelativaDoAr: number;

    constructor(temperatura: number, ph: number, pressaoAtmosferica: number, umidadeRelativaDoAr: number) {
        super();
        this.temperatura = temperatura;
        this.ph = ph;
        this.pressaoAtmosferica = pressaoAtmosferica;
        this.umidadeRelativaDoAr = umidadeRelativaDoAr;
    }

    /* callback para notificar os observadores sobre as mudanças nos dados */
    changeTemperatura(temperatura: number): void {
        this.temperatura = temperatura;
        this.notify();
    }
    
    /* callback para notificar os observadores sobre as mudanças nos dados */
    changePh(ph: number): void {
        this.ph = ph;
        this.notify();
    }
    /*callback para notificar os observadores sobre as mudanças nos dados */
    changePressaoAtmosferica(pressaoAtmosferica: number): void {
        this.pressaoAtmosferica = pressaoAtmosferica;
        this.notify();
    }
    /* callback para notificar os observadores sobre as mudanças nos dados */
    changeUmidadeRelativaDoAr(umidadeRelativaDoAr: number): void {
        this.umidadeRelativaDoAr = umidadeRelativaDoAr;
        this.notify();
    }

    get temperaturaValue(): number {
        return this.temperatura;
    }

    get phValue(): number {
        return this.ph;
    }

    get pressaoAtmosfericaValue(): number {
        return this.pressaoAtmosferica;
    }

    get umidadeRelativaDoArValue(): number {
        return this.umidadeRelativaDoAr;
    }
}

export const Unifesp = new Universidade("Unifesp", "São Paulo");
export const Ufrj = new Universidade("UFRJ", "Rio de Janeiro");
export const Ufrgs = new Universidade("UFRGS", "Porto Alegre");

/* Sujeitos observados */
const medidor1 = new Medidor(25, 7, 1013, 60);
const medidor2 = new Medidor(30, 6.5, 1010, 55);
const medidor3 = new Medidor(20, 8, 1015, 65);

/* As universidades se inscrevem para receber atualizações dos medidores */
Unifesp.update(medidor1);
Ufrj.update(medidor2);
Ufrgs.update(medidor3);

/* Os medidores notificam as universidades sobre as mudanças nos dados */
medidor1.attach(Unifesp);
medidor2.attach(Ufrj);
medidor3.attach(Ufrgs);

/* Mudanças nos dados dos medidores, que irão notificar as universidades */
medidor1.changeTemperatura(28);
medidor2.changePh(6.8);
medidor3.changePressaoAtmosferica(1012);
medidor1.changeUmidadeRelativaDoAr(70);


