export interface ChatMediator {
	register(user: ChatUser): void;
	send(message: string, from: ChatUser, to?: ChatUser): void;
}

export interface ChatUser {
	readonly name: string;
	send(message: string, to?: ChatUser): void;
	receive(message: string, from: ChatUser): void;
}

export type TypeMessage = {
	from: string;
	message: string;
};

export class Chat implements ChatMediator {
	private readonly users = new Set<ChatUser>();

	register(user: ChatUser): void {
		this.users.add(user);
	}

	send(message: string, from: ChatUser, to?: ChatUser): void {
		if (to) {
			to.receive(message, from);
			return;
		}

		for (const user of this.users) {
			if (user !== from) user.receive(message, from);
		}
	}
}

export class User implements ChatUser {
	private readonly inboxInternal: TypeMessage[] = [];

	constructor(
		public readonly name: string,
		private readonly chat: ChatMediator
	) {
		this.chat.register(this);
	}

	send(message: string, to?: ChatUser): void {
		this.chat.send(message, this, to);
	}

	receive(message: string, from: ChatUser): void {
		this.inboxInternal.push({ from: from.name, message });
	}

	get inbox(): readonly TypeMessage[] {
		return this.inboxInternal;
	}
}

const chat = new Chat();
const alice = new User("Alice", chat);
const bob = new User("Bob", chat);
const carol = new User("Carol", chat);

alice.send("Oi, pessoal!");
bob.send("Oi, Alice!", alice);
carol.send("Oi, Bob!", bob);

console.log('--- Alice ---');
console.log(alice.inbox);

console.log('--- Bob ---');
console.log(bob.inbox);

console.log('--- Carol ---');
console.log(carol.inbox);
