import {
  NotificationType,
  TypeChannel,
  SendTo,
  Email,
  Sms,
  Push,
  NotificationsFactory
} from './exercício1';

// Cores para output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

let testsPassed = 0;
let testsFailed = 0;

function test(description: string, testFn: () => void) {
  try {
    testFn();
    console.log(`${colors.green}✓${colors.reset} ${description}`);
    testsPassed++;
  } catch (error: any) {
    console.log(`${colors.red}✗${colors.reset} ${description}`);
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

// ==================== TESTES FACTORY ====================
console.log(`\n${colors.blue}=== TESTES NOTIFICAÇÕES FACTORY ===${colors.reset}`);

test('Factory deve criar instância de Email', () => {
  const email = NotificationsFactory.createChannel('email');
  assert(email instanceof Email, 'Deve ser instância de Email');
});

test('Factory deve criar instância de SMS', () => {
  const sms = NotificationsFactory.createChannel('sms');
  assert(sms instanceof Sms, 'Deve ser instância de Sms');
});

test('Factory deve criar instância de Push', () => {
  const push = NotificationsFactory.createChannel('push');
  assert(push instanceof Push, 'Deve ser instância de Push');
});

test('Factory deve lançar erro para tipo inválido', () => {
  try {
    NotificationsFactory.createChannel('invalid');
    throw new Error('Deveria ter lançado um erro');
  } catch (error: any) {
    assert(
      error.message.includes('inválido'),
      'Mensagem de erro deve conter "inválido"'
    );
  }
});

// ==================== TESTES CANAIS ====================
console.log(`\n${colors.blue}=== TESTES DOS CANAIS ===${colors.reset}`);

test('Email deve implementar interface TypeChannel', () => {
  const email = NotificationsFactory.createChannel('email');
  assert(typeof email?.send === 'function', 'Email deve ter método send()');
});

test('SMS deve implementar interface TypeChannel', () => {
  const sms = NotificationsFactory.createChannel('sms');
  assert(typeof sms?.send === 'function', 'SMS deve ter método send()');
});

test('Push deve implementar interface TypeChannel', () => {
  const push = NotificationsFactory.createChannel('push');
  assert(typeof push?.send === 'function', 'Push deve ter método send()');
});

test('Email.send() deve executar sem erros', () => {
  const email = NotificationsFactory.createChannel('email');
  try {
    email?.send('Teste email');
  } catch (error) {
    throw new Error('Email.send() não deveria lançar erro');
  }
});

test('SMS.send() deve executar sem erros', () => {
  const sms = NotificationsFactory.createChannel('sms');
  try {
    sms?.send('Teste SMS');
  } catch (error) {
    throw new Error('SMS.send() não deveria lançar erro');
  }
});

test('Push.send() deve executar sem erros', () => {
  const push = NotificationsFactory.createChannel('push');
  try {
    push?.send('Teste Push');
  } catch (error) {
    throw new Error('Push.send() não deveria lançar erro');
  }
});

// ==================== RESUMO ====================
console.log(
  `\n${colors.blue}=== RESUMO DOS TESTES ===${colors.reset}`
);
console.log(
  `${colors.green}Passou: ${testsPassed}${colors.reset}`
);
console.log(
  `${colors.red}Falhou: ${testsFailed}${colors.reset}`
);
console.log(
  `Total: ${testsPassed + testsFailed}\n`
);

if (testsFailed > 0) {
  process.exit(1);
}
