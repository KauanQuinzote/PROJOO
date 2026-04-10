import { Singleton, Whatsapp } from "./exercício1"
import { TypeChannel } from "./exercício1"

export class Adapter implements TypeChannel {
    private channel: TypeChannel;
    
    constructor(channel: TypeChannel) {
        this.channel = channel;
    }

    send(message: string): void {
        const adaptedMessage = `Adapted: ${message}`;
        this.channel.send(adaptedMessage);
    }
}

export class AdapterWhatsApp {
    private channel: Whatsapp;

    constructor(channel: Whatsapp) {
        this.channel = channel;
    }

    send(message: string) {
        this.channel.sendMessage(message)
    }
}

export class ProxyDatabase {
    private log: string[] = [];
    private database: Singleton; 

    constructor() {
        this.database = Singleton.getConfigurations('Banco de Dados Principal', 'localhost', 100);
    }

    consultarBancoDados(): Singleton {
        const timestamp = new Date().toISOString();
        
        try {
            this.log.push(`[${timestamp}] Consultando banco de dados...`);
            
            const result = this.database;
            
            return result;
        } catch (error: any) {

            this.log.push(`[${timestamp}] Erro na consulta: ${error.message}`);
            throw error;
        }
    }

    getLogs(): string[] {
        return [...this.log];
    }
}