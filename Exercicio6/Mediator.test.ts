import { Chat, User } from "./Mediator";

describe("Mediator (Chat/User)", () => {
  test("broadcast envia para todos", () => {
    const chat = new Chat();
    const alice = new User("Alice", chat);
    const bob = new User("Bob", chat);
    const carol = new User("Carol", chat);

    alice.send("Oi, pessoal!");

    expect(alice.inbox).toHaveLength(0);
    expect(bob.inbox).toEqual([{ from: "Alice", message: "Oi, pessoal!" }]);
    expect(carol.inbox).toEqual([{ from: "Alice", message: "Oi, pessoal!" }]);
  });
});
