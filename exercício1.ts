class Configuration {
    private nome: string;
    private server: string;
    private max: number;
    private sent: number;

     constructor(nome: string, server: string) {
        this.nome = nome;
        this.server = server;
        this.max = 100;
        this.sent = 0;
     }

    private static instance: Configuration;

    public static getConfigurations(nome: string, server: string) {
        if (!this.instance) {
            this.instance = new Configuration(nome, server);
        }
        return this.instance;
    }

    public sendNotification() {
        if (this.sent < this.max) {
            this.sent++;
            console.log(`Notificação enviada. Total enviado: ${this.sent}`);
        } else {
            console.log('Limite de notificações atingido');
        }
    }
}

class Notification {
    public send(): void {
        console.log('Enviando notificação...');
    }
}

class EmailNotification extends Notification {
    public send(): void {
        console.log('Enviando notificação por email...');
    }
}

class SMSNotification extends Notification {
    public send(): void {
        console.log('Enviando notificação por SMS...');
    }
}

class NotificationFactory {

    public static createNotification(type: string) {
        if (type === 'email') {
            return new EmailNotification();
        } else if (type === 'sms') {
            return new SMSNotification();
        } else {
            throw new Error('Tipo de notificação desconhecido');
        }
    }
}