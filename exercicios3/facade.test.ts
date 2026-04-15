import { TV, Projector, Receiver, MediaPlayer, SoundSystem, Light } from './facade';

console.log("=== Testando TV ===");
const tv = new TV();
tv.ligar();
tv.aumentarVolume(25);
console.log(`Volume TV: ${tv.volume}`);
tv.desligar();

console.log("\n=== Testando Projector ===");
const projector = new Projector();
projector.ligar();
projector.ajustarBrilho(90);
console.log(`Brilho Projector: ${projector.brilho}%`);
projector.desligar();

console.log("\n=== Testando Receiver ===");
const receiver = new Receiver();
receiver.ligar();
receiver.trocarCanal("ÓPTICO");
console.log(`Entrada Receiver: ${receiver.entrada}`);
receiver.desligar();

console.log("\n=== Testando MediaPlayer ===");
const media = new MediaPlayer();
media.ligar();
media.reproduzir("video.mp4");
console.log(`Arquivo: ${media.arquivo}`);
media.desligar();

console.log("\n=== Testando SoundSystem ===");
const som = new SoundSystem();
som.ligar();
som.aumentarSom(20);
console.log(`Volume Som: ${som.volume}`);
som.diminuirSom(5);
console.log(`Volume Som: ${som.volume}`);
som.desligar();

console.log("\n=== Testando Light ===");
const luz = new Light();
luz.ligar();
luz.ajustarIntensidade(60);
console.log(`Intensidade Luz: ${luz.intensidade}%`);
luz.desligar();
