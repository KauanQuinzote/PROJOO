
export interface Equipment {
  ligar(): void;
  desligar(): void;
}

export class TV implements Equipment {
  volume: number = 0;

  ligar(): void {
    console.log("TV ligada!");
  }

  desligar(): void {
    console.log("TV desligada!");
  }

  aumentarVolume(valor: number): void {
    this.volume += valor;
    console.log(`Volume da TV aumentado para: ${this.volume}`);
  }
}

export class Projector implements Equipment {
  brilho: number = 50;

  ligar(): void {
    console.log("Projetor ligado!");
  }

  desligar(): void {
    console.log("Projetor desligado!");
  }

  ajustarBrilho(valor: number): void {
    this.brilho = Math.max(0, Math.min(100, valor));
    console.log(`Brilho do projetor ajustado para: ${this.brilho}%`);
  }
}

export class Receiver implements Equipment {
  entrada: string = "HDMI";

  ligar(): void {
    console.log("Receiver ligado!");
  }

  desligar(): void {
    console.log("Receiver desligado!");
  }

  trocarCanal(novaEntrada: string): void {
    this.entrada = novaEntrada;
    console.log(`Receiver alterado para entrada: ${this.entrada}`);
  }
}

export class MediaPlayer implements Equipment {
  arquivo: string = "";

  ligar(): void {
    console.log("Media Player ligado!");
  }

  desligar(): void {
    console.log("Media Player desligado!");
  }

  reproduzir(nomeArquivo: string): void {
    this.arquivo = nomeArquivo;
    console.log(`Reproduzindo: ${this.arquivo}`);
  }
}

export class SoundSystem implements Equipment {
  volume: number = 0;

  ligar(): void {
    console.log("Sistema de Som ligado!");
  }

  desligar(): void {
    console.log("Sistema de Som desligado!");
  }

  aumentarSom(volume: number): void {
    this.volume += volume;
    console.log(`Volume do sistema de som aumentado para: ${this.volume}`);
  }

  diminuirSom(volume: number): void {
    this.volume -= volume;
    console.log(`Volume do sistema de som diminuído para: ${this.volume}`);
  }
}

export class Light implements Equipment {
  intensidade: number = 0;

  ligar(): void {
    console.log("Luz ligada!");
  }

  desligar(): void {
    console.log("Luz desligada!");
  }

  ajustarIntensidade(valor: number): void {
    this.intensidade = Math.max(0, Math.min(100, valor));
    console.log(`Intensidade da luz ajustada para: ${this.intensidade}%`);
  }
}

class HomeTheaterFacade {
  private tv: TV;
  private projector: Projector;
  private receiver: Receiver;
  private mediaPlayer: MediaPlayer;
  private soundSystem: SoundSystem;
  private light: Light;

  constructor() {
    this.tv = new TV();
    this.projector = new Projector();
    this.receiver = new Receiver();
    this.mediaPlayer = new MediaPlayer();
    this.soundSystem = new SoundSystem();
    this.light = new Light();
  }

  assistirFilme(nomeArquivo: string): void {
    console.log("Preparando para assistir filme...");
    this.tv.ligar();
    this.projector.ligar();
    this.receiver.ligar();
    this.mediaPlayer.ligar();
    this.soundSystem.ligar();
    this.light.ajustarIntensidade(30);
    this.mediaPlayer.reproduzir(nomeArquivo);
  }

  encerrarFilme(): void {
    console.log("Encerrando filme...");
    this.tv.desligar();
    this.projector.desligar();
    this.receiver.desligar();
    this.mediaPlayer.desligar();
    this.soundSystem.desligar();
    this.light.ajustarIntensidade(100);
  }

  ouvirMusica(nomeArquivo: string): void {
    console.log("Preparando para ouvir música...");
    this.soundSystem.ligar();
    this.mediaPlayer.ligar();
    this.mediaPlayer.reproduzir(nomeArquivo);
  }

  encerrarMusica(): void {
    console.log("Encerrando música...");
    this.soundSystem.desligar();
    this.mediaPlayer.desligar();
  } 
}

const homeTheater = new HomeTheaterFacade();
homeTheater.assistirFilme("Inception.mp4");
homeTheater.encerrarFilme();
homeTheater.ouvirMusica("BohemianRhapsody.mp3");
homeTheater.encerrarMusica();