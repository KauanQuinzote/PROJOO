interface TypeChannel {
    name: string;
    send(message: string): void;
}

class Email implements TypeChannel {
    name: string;

    constructor(name = 'email') {
        this.name = name
    }

    send(message: string) {
        console.log(`${message}`);
        console.log('sent');
    }
}

class Sms implements TypeChannel {
    name: string;

    constructor (name = 'sms') {
        this.name= name
    }

    send(message: string) {
        console.log(`${message}`);
        console.log('sent');
    }
}

class Push implements TypeChannel {
    name: string;

    constructor(name = 'sms') {
        this.name = name
    }

    send(message: string) {
        console.log(`${message}`);
        console.log('sent');
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
    }
}

const email = NotificationsFactory.createChannel('email');
const sms = NotificationsFactory.createChannel('sms');
const push = NotificationsFactory.createChannel('push');

email?.send('hi')