enum NotificationType{
    email = 'email',
    sms = 'sms',
    push = 'push'
}

interface TypeChannel {
    send(message: string): void;
}

abstract class SendTo implements TypeChannel{
    constructor(private name: string) {}

    send(message: string) {
        console.log(`${message}`);
        console.log('sent');
    }
}

class Email extends SendTo {

    constructor() { super(NotificationType.email) }
    
}

class Sms extends SendTo {
    constructor () {
        super(NotificationType.sms );
    }

    send(message: string) {
        console.log(`${message}`);
        console.log('sent');
    }
}

class Push extends SendTo {
    constructor() {
        super(NotificationType.push);
    }
}

class NotificationsFactory {
  
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

class Configurations {
    nome: string;
    server: string;
    instance: Configurations | null;
    max: number;
    counter: number;

    private constructor(name: string, server: string, max: number) {
        this.nome = name;
        this.server = server;
        this.instance = null;
        this.max = max;
        this.counter = 0;
    }

    public getConfigurations(name: string, server: string, max: number) {
        if( this.instance == null)
            this.instance = new Configurations(name, server, max);

        this.counter++;

        return this.instance;
    }
}