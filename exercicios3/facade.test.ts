import { TV, Projector, Receiver, MediaPlayer, SoundSystem, Light } from './facade';

describe('Facade Pattern - Dispositivos', () => {
  describe('TV', () => {
    let tv: TV;

    beforeEach(() => {
      tv = new TV();
    });

    it('deve ligar a TV', () => {
      tv.ligar();
      expect(tv.isLigada).toBe(true);
    });

    it('deve desligar a TV', () => {
      tv.ligar();
      tv.desligar();
      expect(tv.isLigada).toBe(false);
    });

    it('deve aumentar o volume da TV', () => {
      tv.ligar();
      tv.aumentarVolume(25);
      expect(tv.volume).toBe(25);
    });

    it('deve ter volume 0 quando desligada', () => {
      tv.ligar();
      tv.aumentarVolume(25);
      tv.desligar();
      expect(tv.volume).toBe(0);
    });
  });

  describe('Projector', () => {
    let projector: Projector;

    beforeEach(() => {
      projector = new Projector();
    });

    it('deve ligar o projetor', () => {
      projector.ligar();
      expect(projector.isLigado).toBe(true);
    });

    it('deve desligar o projetor', () => {
      projector.ligar();
      projector.desligar();
      expect(projector.isLigado).toBe(false);
    });

    it('deve ajustar o brilho do projetor', () => {
      projector.ligar();
      projector.ajustarBrilho(90);
      expect(projector.brilho).toBe(90);
    });

    it('brilho deve ser 0 quando desligado', () => {
      projector.ligar();
      projector.ajustarBrilho(90);
      projector.desligar();
      expect(projector.brilho).toBe(0);
    });
  });

  describe('Receiver', () => {
    let receiver: Receiver;

    beforeEach(() => {
      receiver = new Receiver();
    });

    it('deve ligar o receiver', () => {
      receiver.ligar();
      expect(receiver.isLigado).toBe(true);
    });

    it('deve desligar o receiver', () => {
      receiver.ligar();
      receiver.desligar();
      expect(receiver.isLigado).toBe(false);
    });

    it('deve trocar o canal do receiver', () => {
      receiver.ligar();
      receiver.trocarCanal("ÓPTICO");
      expect(receiver.entrada).toBe("ÓPTICO");
    });

    it('entrada deve estar vazia quando desligado', () => {
      receiver.ligar();
      receiver.trocarCanal("ÓPTICO");
      receiver.desligar();
      expect(receiver.entrada).toBe("");
    });
  });

  describe('MediaPlayer', () => {
    let media: MediaPlayer;

    beforeEach(() => {
      media = new MediaPlayer();
    });

    it('deve ligar o media player', () => {
      media.ligar();
      expect(media.isLigado).toBe(true);
    });

    it('deve desligar o media player', () => {
      media.ligar();
      media.desligar();
      expect(media.isLigado).toBe(false);
    });

    it('deve reproduzir um arquivo', () => {
      media.ligar();
      media.reproduzir("video.mp4");
      expect(media.arquivo).toBe("video.mp4");
    });

    it('arquivo deve estar vazio quando desligado', () => {
      media.ligar();
      media.reproduzir("video.mp4");
      media.desligar();
      expect(media.arquivo).toBe("");
    });
  });

  describe('SoundSystem', () => {
    let som: SoundSystem;

    beforeEach(() => {
      som = new SoundSystem();
    });

    it('deve ligar o sistema de som', () => {
      som.ligar();
      expect(som.isLigado).toBe(true);
    });

    it('deve desligar o sistema de som', () => {
      som.ligar();
      som.desligar();
      expect(som.isLigado).toBe(false);
    });

    it('deve aumentar o som', () => {
      som.ligar();
      som.aumentarSom(20);
      expect(som.volume).toBe(20);
    });

    it('deve diminuir o som', () => {
      som.ligar();
      som.aumentarSom(20);
      som.diminuirSom(5);
      expect(som.volume).toBe(15);
    });

    it('volume deve ser 0 quando desligado', () => {
      som.ligar();
      som.aumentarSom(20);
      som.desligar();
      expect(som.volume).toBe(0);
    });
  });

  describe('Light', () => {
    let luz: Light;

    beforeEach(() => {
      luz = new Light();
    });

    it('deve ligar a luz', () => {
      luz.ligar();
      expect(luz.isLigada).toBe(true);
    });

    it('deve desligar a luz', () => {
      luz.ligar();
      luz.desligar();
      expect(luz.isLigada).toBe(false);
    });

    it('deve ajustar a intensidade da luz', () => {
      luz.ligar();
      luz.ajustarIntensidade(60);
      expect(luz.intensidade).toBe(60);
    });

    it('intensidade deve ser 0 quando desligada', () => {
      luz.ligar();
      luz.ajustarIntensidade(60);
      luz.desligar();
      expect(luz.intensidade).toBe(0);
    });
  });
});
