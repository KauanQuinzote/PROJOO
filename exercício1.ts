export enum NotificationType{
    email = 'email',
    sms = 'sms',
    push = 'push'
}

export interface TypeChannel {
    send(message: string): void;
}

export abstract class SendTo implements TypeChannel{
    constructor(private name: string) {}

    send(message: string) {
        console.log(`${message}`);
        console.log('sent');
    }
}

export class Email extends SendTo {

    constructor() { super(NotificationType.email) }
    
}

export class Sms extends SendTo {
    constructor () {
        super(NotificationType.sms );
    }

    send(message: string) {
        console.log(`${message}`);
        console.log('sent');
    }
}

export class Push extends SendTo {
    constructor() {
        super(NotificationType.push);
    }
}

export class Whatsapp {

    constructor(){ }

    public sendMessage(message: string) {
        console.log("Ó o zap");
        console.log(`${message}`);
    }

}

export class NotificationsFactory {
  
    private constructor() {}

    static createChannel(type: string) {
       if (type === 'email')
            return new Email();
       else if (type === 'sms')
            return new Sms();
        else if (type === 'push')
            return new Push();

    throw new Error(`Tipo de canal ${type} é inválido.`);
    }
}

const email = NotificationsFactory.createChannel('email');
const sms = NotificationsFactory.createChannel('sms');
const push = NotificationsFactory.createChannel('push');

email?.send('Hello via Email!');
sms?.send('Hello via SMS!');
push?.send('Hello via Push Notification!');

export class Singleton {
    nome: string;
    server: string;
    private static instance: Singleton | null = null;
    max: number;
    counter: number;

    private constructor(name: string, server: string, max: number) {
        this.nome = name;
        this.server = server;
        this.max = max;
        this.counter = 0;
    }

    private verifyCounter() {

        if (this.counter > this.max)
            throw Error('Servidor já atingiu o limite máximo de utilização');
        else
            this.counter++;
    }

    public static getConfigurations(name: string, server: string, max: number) {
        if( this.instance == null)
            this.instance = new Singleton(name, server, max);
        this.instance.verifyCounter();
        return this.instance;
    }
}