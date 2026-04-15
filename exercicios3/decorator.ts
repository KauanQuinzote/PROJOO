export interface Beverage {
    name: string;
    description: string;
    cost: number;
    getDescription(): string;
    getCost(): number;
}

export abstract class BeverageBehavior implements Beverage {
    public name: string = "";
    public description: string = "";
    public cost: number = 0;
    protected beverage?: Beverage;

    constructor(beverage?: Beverage) {
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage ? this.beverage.getDescription() : this.description;
    }

    getCost(): number {
        return this.beverage ? this.beverage.getCost() : this.cost;
    }

    iterateCost(valor: number): void {
        this.cost += valor;
    }
}

export class Coffee extends BeverageBehavior {
    constructor() {
        super();
        this.name = "Coffee";
        this.description = "Café coado";
        this.cost = 5.00;
    }
}

export class Cappuccino extends BeverageBehavior {
    constructor() {
        super();
        this.name = "Cappuccino";
        this.description = "Cappuccino com leite e espuma";
        this.cost = 6.00;
    }
}

export class Tea extends BeverageBehavior {
    constructor() {
        super();
        this.name = "Tea";
        this.description = "Chá quente";
        this.cost = 4.00;
    }
}

export class Milky extends BeverageBehavior {
    constructor(beverage: Beverage) {
        super(beverage);
        this.name = "Milky";
        this.description = "Acrescenta leite";
        this.cost = 1.50;
    }

    getDescription(): string {
        return this.beverage ? this.beverage.getDescription() + ", Leite" : this.description;
    }

    getCost(): number {
        return this.beverage ? this.beverage.getCost() + this.cost : this.cost;
    }
}

export class Chocolate extends BeverageBehavior {
    constructor(beverage: Beverage) {
        super(beverage);
        this.name = "Chocolate";
        this.description = "Acrescenta chocolate";
        this.cost = 2.00;
    }

    getDescription(): string {
        return this.beverage ? this.beverage.getDescription() + ", Chocolate" : this.description;
    }

    getCost(): number {
        return this.beverage ? this.beverage.getCost() + this.cost : this.cost;
    }
}

export class Chantilly extends BeverageBehavior {
    constructor(beverage: Beverage) {
        super(beverage);
        this.name = "Chantilly";
        this.description = "Acrescenta chantilly";
        this.cost = 1.75;
    }

    getDescription(): string {
        return this.beverage ? this.beverage.getDescription() + ", Chantilly" : this.description;
    }

    getCost(): number {
        return this.beverage ? this.beverage.getCost() + this.cost : this.cost;
    }
}

export class Cinnamon extends BeverageBehavior {
    constructor(beverage: Beverage) {
        super(beverage);
        this.name = "Cinnamon";
        this.description = "Acrescenta canela";
        this.cost = 1.00;
    }

    getDescription(): string {
        return this.beverage ? this.beverage.getDescription() + ", Canela" : this.description;
    }

    getCost(): number {
        return this.beverage ? this.beverage.getCost() + this.cost : this.cost;
    }
}

let beverage: Beverage = new Coffee();
console.log(beverage.getDescription());
console.log(beverage.getCost());

beverage = new Milky(beverage);
console.log(beverage.getDescription());

console.log(beverage.getCost());

beverage = new Chocolate(beverage);
console.log(beverage.getDescription());
console.log(beverage.getCost());

beverage = new Chantilly(beverage);
console.log(beverage.getDescription());
console.log(beverage.getCost());

beverage = new Cinnamon(beverage);
console.log(beverage.getDescription());
console.log(beverage.getCost());

console.log(beverage.getDescription());
console.log(`Custo total: $${beverage.getCost().toFixed(2)}`);


