import {
  NotificationType,
  TypeChannel,
  SendTo,
  Email,
  Sms,
  Push,
  NotificationsFactory
} from './exercício1';

describe('NotificationsFactory - Factory Pattern', () => {
  describe('Criação de instâncias', () => {
    it('Factory deve criar instância de Email', () => {
      const email = NotificationsFactory.createChannel('email');
      expect(email).toBeInstanceOf(Email);
    });

    it('Factory deve criar instância de SMS', () => {
      const sms = NotificationsFactory.createChannel('sms');
      expect(sms).toBeInstanceOf(Sms);
    });

    it('Factory deve criar instância de Push', () => {
      const push = NotificationsFactory.createChannel('push');
      expect(push).toBeInstanceOf(Push);
    });

    it('Factory deve lançar erro para tipo inválido', () => {
      expect(() => {
        NotificationsFactory.createChannel('invalid');
      }).toThrow();
    });

    it('Factory deve lançar erro com mensagem contendo "inválido"', () => {
      expect(() => {
        NotificationsFactory.createChannel('invalid');
      }).toThrow(/inválido/);
    });
  });

  describe('Implementação de TypeChannel', () => {
    it('Email deve implementar interface TypeChannel', () => {
      const email = NotificationsFactory.createChannel('email');
      expect(email).toHaveProperty('send');
      expect(typeof email?.send).toBe('function');
    });

    it('SMS deve implementar interface TypeChannel', () => {
      const sms = NotificationsFactory.createChannel('sms');
      expect(sms).toHaveProperty('send');
      expect(typeof sms?.send).toBe('function');
    });

    it('Push deve implementar interface TypeChannel', () => {
      const push = NotificationsFactory.createChannel('push');
      expect(push).toHaveProperty('send');
      expect(typeof push?.send).toBe('function');
    });
  });

  describe('Execução dos métodos send()', () => {
    it('Email.send() deve executar sem erros', () => {
      const email = NotificationsFactory.createChannel('email');
      expect(() => {
        email?.send('Teste email');
      }).not.toThrow();
    });

    it('SMS.send() deve executar sem erros', () => {
      const sms = NotificationsFactory.createChannel('sms');
      expect(() => {
        sms?.send('Teste SMS');
      }).not.toThrow();
    });

    it('Push.send() deve executar sem erros', () => {
      const push = NotificationsFactory.createChannel('push');
      expect(() => {
        push?.send('Teste Push');
      }).not.toThrow();
    });
  });
});
