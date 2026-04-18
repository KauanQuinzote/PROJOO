import { Coffee, Cappuccino, Tea, Milky, Chocolate, Chantilly, Cinnamon, Beverage } from './decorator';

describe('Decorator Pattern - Bebidas', () => {
  describe('Bebidas Básicas', () => {
    it('Coffee deve ter nome correto', () => {
      const coffee = new Coffee();
      expect(coffee.name).toBeDefined();
      expect(typeof coffee.name).toBe('string');
    });

    it('Coffee deve retornar descrição', () => {
      const coffee = new Coffee();
      expect(coffee.getDescription()).toBeDefined();
      expect(typeof coffee.getDescription()).toBe('string');
    });

    it('Coffee deve ter custo definido', () => {
      const coffee = new Coffee();
      expect(coffee.getCost()).toBeGreaterThan(0);
    });

    it('Cappuccino deve ter nome correto', () => {
      const cappuccino = new Cappuccino();
      expect(cappuccino.name).toBeDefined();
    });

    it('Cappuccino deve retornar descrição', () => {
      const cappuccino = new Cappuccino();
      expect(cappuccino.getDescription()).toBeDefined();
    });

    it('Cappuccino deve ter custo definido', () => {
      const cappuccino = new Cappuccino();
      expect(cappuccino.getCost()).toBeGreaterThan(0);
    });

    it('Tea deve ter nome correto', () => {
      const tea = new Tea();
      expect(tea.name).toBeDefined();
    });

    it('Tea deve retornar descrição', () => {
      const tea = new Tea();
      expect(tea.getDescription()).toBeDefined();
    });

    it('Tea deve ter custo definido', () => {
      const tea = new Tea();
      expect(tea.getCost()).toBeGreaterThan(0);
    });
  });

  describe('Decorators - Composição', () => {
    it('Coffee com Milky deve aumentar descrição', () => {
      let beverage: Beverage = new Coffee();
      const descricaoOriginal = beverage.getDescription();
      
      beverage = new Milky(beverage);
      const descricaoComMilky = beverage.getDescription();
      
      expect(descricaoComMilky).not.toBe(descricaoOriginal);
      expect(descricaoComMilky.length).toBeGreaterThan(descricaoOriginal.length);
    });

    it('Coffee com Milky deve aumentar custo', () => {
      let beverage: Beverage = new Coffee();
      const custoOriginal = beverage.getCost();
      
      beverage = new Milky(beverage);
      const custoComMilky = beverage.getCost();
      
      expect(custoComMilky).toBeGreaterThan(custoOriginal);
    });

    it('Coffee com múltiplos decorators', () => {
      let beverage: Beverage = new Coffee();
      const custoOriginal = beverage.getCost();
      
      beverage = new Milky(beverage);
      const custoComMilky = beverage.getCost();
      
      beverage = new Chocolate(beverage);
      const custoComChocolate = beverage.getCost();
      
      beverage = new Chantilly(beverage);
      const custoComChantilly = beverage.getCost();
      
      beverage = new Cinnamon(beverage);
      const custoComCinnamon = beverage.getCost();
      
      expect(custoComMilky).toBeGreaterThan(custoOriginal);
      expect(custoComChocolate).toBeGreaterThan(custoComMilky);
      expect(custoComChantilly).toBeGreaterThan(custoComChocolate);
      expect(custoComCinnamon).toBeGreaterThan(custoComChantilly);
    });
  });

  describe('Decorators - Combinações', () => {
    it('Cappuccino com Chocolate e Leite', () => {
      let bebida: Beverage = new Cappuccino();
      const custoBase = bebida.getCost();
      
      bebida = new Chocolate(bebida);
      bebida = new Milky(bebida);
      
      expect(bebida.getCost()).toBeGreaterThan(custoBase);
    });

    it('Tea com Chocolate', () => {
      let bebida: Beverage = new Tea();
      const custoBase = bebida.getCost();
      
      bebida = new Chocolate(bebida);
      
      expect(bebida.getCost()).toBeGreaterThan(custoBase);
      expect(bebida.getDescription()).toContain('Chocolate');
    });
  });

  describe('iterateCost', () => {
    it('iterateCost deve aumentar o custo da bebida', () => {
      const chaiTea = new Tea();
      const custoAntes = chaiTea.getCost();
      
      chaiTea.iterateCost(2.00);
      const custoDepois = chaiTea.getCost();
      
      expect(custoDepois).toBeGreaterThan(custoAntes);
    });

    it('iterateCost deve adicionar o valor correto', () => {
      const coffee = new Coffee();
      const custoOriginal = coffee.getCost();
      const adicional = 1.50;
      
      coffee.iterateCost(adicional);
      
      expect(coffee.getCost()).toBe(custoOriginal + adicional);
    });
  });
});
