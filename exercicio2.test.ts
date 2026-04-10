import { Adapter, AdapterWhatsApp, ProxyDatabase } from './exercicio2';
import { NotificationsFactory } from './exercício1';

let testsPassed = 0;
let testsFailed = 0;

function test(description: string, testFn: () => void) {
  try {
    testFn();
    console.log(`✓ ${description}`);
    testsPassed++;
  } catch (error: any) {
    console.log(`✗ ${description}`);
    console.log(`  Erro: ${error.message}`);
    testsFailed++;
  }
}

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertEquals(actual: any, expected: any, message: string) {
  if (actual !== expected) {
    throw new Error(`${message} (esperado: ${expected}, obtido: ${actual})`);
  }
}

// ==================== TESTES ADAPTER ====================
console.log('\n=== TESTES ADAPTER ===');

test('Adapter com Email', () => {
  const email = NotificationsFactory.createChannel('email');
  const adapter = new Adapter(email!);
  adapter.send('Teste Email');
});

test('Adapter com SMS', () => {
  const sms = NotificationsFactory.createChannel('sms');
  const adapter = new Adapter(sms!);
  adapter.send('Teste SMS');
});

test('Adapter com Push', () => {
  const push = NotificationsFactory.createChannel('push');
  const adapter = new Adapter(push!);
  adapter.send('Teste Push');
});

// ==================== TESTES ADAPTER WHATSAPP ====================
console.log('\n=== TESTES ADAPTER WHATSAPP ===');

test('AdapterWhatsApp envia mensagem', () => {
  const mockWhatsApp = {
    sendMessage: (message: string) => {
      console.log(`WhatsApp: ${message}`);
    }
  };
  
  const adapter = new AdapterWhatsApp(mockWhatsApp as any);
  adapter.send('Testando WhatsApp');
});

test('AdapterWhatsApp com múltiplas mensagens', () => {
  const mensagens: string[] = [];
  
  const mockWhatsApp = {
    sendMessage: (message: string) => {
      mensagens.push(message);
    }
  };
  
  const adapter = new AdapterWhatsApp(mockWhatsApp as any);
  adapter.send('Mensagem 1');
  adapter.send('Mensagem 2');
  
  assertEquals(mensagens.length, 2, 'Deve ter enviado 2 mensagens');
});

// ==================== TESTES PROXY DATABASE ====================
console.log('\n=== TESTES PROXY DATABASE ===');

test('ProxyDatabase consulta banco de dados', () => {
  const proxy = new ProxyDatabase();
  const database = proxy.consultarBancoDados();
  assert(database !== null, 'Deve retornar banco de dados');
});

test('ProxyDatabase registra logs', () => {
  const proxy = new ProxyDatabase();
  proxy.consultarBancoDados();
  
  const logs = proxy.getLogs();
  assert(logs.length > 0, 'Deve logar a consulta');
});

test('ProxyDatabase mantém histórico de consultas', () => {
  const proxy = new ProxyDatabase();
  proxy.consultarBancoDados();
  const logsApos1 = proxy.getLogs().length;
  
  proxy.consultarBancoDados();
  const logsApos2 = proxy.getLogs().length;
  
  assert(logsApos2 > logsApos1, 'Deve acumular logs');
});

test('ProxyDatabase retorna mesma instância (Singleton)', () => {
  const proxy = new ProxyDatabase();
  const db1 = proxy.consultarBancoDados();
  const db2 = proxy.consultarBancoDados();
  
  assertEquals(db1, db2, 'Deve retornar mesma instância');
});

// ==================== RESUMO ====================
console.log('\n=== RESUMO ===');
console.log(`Passou: ${testsPassed}`);
console.log(`Falhou: ${testsFailed}`);
console.log(`Total: ${testsPassed + testsFailed}\n`);

if (testsFailed > 0) {
  process.exit(1);
}
