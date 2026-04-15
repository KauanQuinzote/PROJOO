import { Coffee, Cappuccino, Tea, Milky, Chocolate, Chantilly, Cinnamon, Beverage } from './decorator';

console.log("=== Testando Bebidas Básicas ===\n");

const coffee = new Coffee();
console.log(`Nome: ${coffee.name}`);
console.log(`Descrição: ${coffee.getDescription()}`);
console.log(`Custo: R$ ${coffee.getCost().toFixed(2)}\n`);

const cappuccino = new Cappuccino();
console.log(`Nome: ${cappuccino.name}`);
console.log(`Descrição: ${cappuccino.getDescription()}`);
console.log(`Custo: R$ ${cappuccino.getCost().toFixed(2)}\n`);

const tea = new Tea();
console.log(`Nome: ${tea.name}`);
console.log(`Descrição: ${tea.getDescription()}`);
console.log(`Custo: R$ ${tea.getCost().toFixed(2)}\n`);

console.log("=== Testando Decorators ===\n");

let beverage: Beverage = new Coffee();
console.log(`1. ${beverage.getDescription()} - R$ ${beverage.getCost().toFixed(2)}`);

beverage = new Milky(beverage);
console.log(`2. ${beverage.getDescription()} - R$ ${beverage.getCost().toFixed(2)}`);

beverage = new Chocolate(beverage);
console.log(`3. ${beverage.getDescription()} - R$ ${beverage.getCost().toFixed(2)}`);

beverage = new Chantilly(beverage);
console.log(`4. ${beverage.getDescription()} - R$ ${beverage.getCost().toFixed(2)}`);

beverage = new Cinnamon(beverage);
console.log(`5. ${beverage.getDescription()} - R$ ${beverage.getCost().toFixed(2)}\n`);

console.log("=== Testando Combinação Alternativa ===\n");

let bebida: Beverage = new Cappuccino();
console.log(`Base: ${bebida.getDescription()} - R$ ${bebida.getCost().toFixed(2)}`);

bebida = new Chocolate(bebida);
console.log(`Com Chocolate: ${bebida.getDescription()} - R$ ${bebida.getCost().toFixed(2)}`);

bebida = new Milky(bebida);
console.log(`Com Leite: ${bebida.getDescription()} - R$ ${bebida.getCost().toFixed(2)}\n`);

console.log("=== Testando iterateCost ===\n");

const chaiTea = new Tea();
console.log(`Antes: ${chaiTea.getDescription()} - R$ ${chaiTea.getCost().toFixed(2)}`);
chaiTea.iterateCost(2.00);
console.log(`Depois: ${chaiTea.getDescription()} - R$ ${chaiTea.getCost().toFixed(2)}`);
