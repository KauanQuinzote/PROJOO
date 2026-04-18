import { Adapter, AdapterWhatsApp, ProxyDatabase } from './exercicio2';
import { NotificationsFactory } from './exercício1';

describe('Adapter Pattern - Adapter', () => {
  it('deve funcionar com Email', () => {
    const email = NotificationsFactory.createChannel('email');
    const adapter = new Adapter(email!);
    expect(() => adapter.send('Teste Email')).not.toThrow();
  });

  it('deve funcionar com SMS', () => {
    const sms = NotificationsFactory.createChannel('sms');
    const adapter = new Adapter(sms!);
    expect(() => adapter.send('Teste SMS')).not.toThrow();
  });

  it('deve funcionar com Push', () => {
    const push = NotificationsFactory.createChannel('push');
    const adapter = new Adapter(push!);
    expect(() => adapter.send('Teste Push')).not.toThrow();
  });
});

describe('Adapter Pattern - AdapterWhatsApp', () => {
  it('deve enviar mensagem', () => {
    const mockWhatsApp = {
      sendMessage: jest.fn((message: string) => {
        console.log(`WhatsApp: ${message}`);
      })
    };
    
    const adapter = new AdapterWhatsApp(mockWhatsApp as any);
    adapter.send('Testando WhatsApp');
    
    expect(mockWhatsApp.sendMessage).toHaveBeenCalled();
  });

  it('deve enviar múltiplas mensagens', () => {
    const mensagens: string[] = [];
    
    const mockWhatsApp = {
      sendMessage: (message: string) => {
        mensagens.push(message);
      }
    };
    
    const adapter = new AdapterWhatsApp(mockWhatsApp as any);
    adapter.send('Mensagem 1');
    adapter.send('Mensagem 2');
    
    expect(mensagens.length).toBe(2);
  });
});

describe('Proxy Pattern - ProxyDatabase', () => {
  it('deve consultar banco de dados', () => {
    const proxy = new ProxyDatabase();
    const database = proxy.consultarBancoDados();
    expect(database).not.toBeNull();
  });

  it('deve registrar logs de consulta', () => {
    const proxy = new ProxyDatabase();
    proxy.consultarBancoDados();
    
    const logs = proxy.getLogs();
    expect(logs.length).toBeGreaterThan(0);
  });

  it('deve manter histórico de consultas', () => {
    const proxy = new ProxyDatabase();
    proxy.consultarBancoDados();
    const logsApos1 = proxy.getLogs().length;
    
    proxy.consultarBancoDados();
    const logsApos2 = proxy.getLogs().length;
    
    expect(logsApos2).toBeGreaterThan(logsApos1);
  });

  it('deve retornar mesma instância (Singleton)', () => {
    const proxy = new ProxyDatabase();
    const db1 = proxy.consultarBancoDados();
    const db2 = proxy.consultarBancoDados();
    
    expect(db1).toBe(db2);
  });
});
