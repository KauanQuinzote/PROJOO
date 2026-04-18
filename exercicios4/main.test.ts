import { Medidor, Universidade } from './main';

describe('Medidor - Observer Pattern', () => {
  let medidor: Medidor;
  let universidade: Universidade;

  beforeEach(() => {
    medidor = new Medidor(25, 7, 1013, 60);
    universidade = new Universidade('Unifesp', 'São Paulo');
  });

  describe('Inicialização', () => {
    it('deve inicializar com os valores corretos', () => {
      expect(medidor.temperaturaValue).toBe(25);
      expect(medidor.phValue).toBe(7);
      expect(medidor.pressaoAtmosfericaValue).toBe(1013);
      expect(medidor.umidadeRelativaDoArValue).toBe(60);
    });
  });

  describe('Atualização de Temperatura', () => {
    it('deve atualizar a temperatura corretamente', () => {
      medidor.changeTemperatura(30);
      expect(medidor.temperaturaValue).toBe(30);
    });

    it('deve aceitar valores negativos de temperatura', () => {
      medidor.changeTemperatura(-5);
      expect(medidor.temperaturaValue).toBe(-5);
    });

    it('deve aceitar valores decimais de temperatura', () => {
      medidor.changeTemperatura(25.5);
      expect(medidor.temperaturaValue).toBe(25.5);
    });
  });

  describe('Atualização de pH', () => {
    it('deve atualizar o pH corretamente', () => {
      medidor.changePh(6.5);
      expect(medidor.phValue).toBe(6.5);
    });

    it('deve aceitar valores decimais de pH', () => {
      medidor.changePh(7.2);
      expect(medidor.phValue).toBe(7.2);
    });
  });

  describe('Atualização de Pressão Atmosférica', () => {
    it('deve atualizar a pressão atmosférica corretamente', () => {
      medidor.changePressaoAtmosferica(1015);
      expect(medidor.pressaoAtmosfericaValue).toBe(1015);
    });

    it('deve aceitar valores decimais de pressão', () => {
      medidor.changePressaoAtmosferica(1013.25);
      expect(medidor.pressaoAtmosfericaValue).toBe(1013.25);
    });
  });

  describe('Atualização de Umidade Relativa do Ar', () => {
    it('deve atualizar a umidade relativa do ar corretamente', () => {
      medidor.changeUmidadeRelativaDoAr(65);
      expect(medidor.umidadeRelativaDoArValue).toBe(65);
    });

    it('deve aceitar valores decimais de umidade', () => {
      medidor.changeUmidadeRelativaDoAr(62.5);
      expect(medidor.umidadeRelativaDoArValue).toBe(62.5);
    });
  });

  describe('Padrão Observer', () => {
    it('deve notificar os observadores quando a temperatura muda', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      medidor.attach(universidade);
      
      medidor.changeTemperatura(35);
      
      expect(consoleSpy).toHaveBeenCalled();
      expect(medidor.temperaturaValue).toBe(35);
      
      consoleSpy.mockRestore();
    });

    it('deve notificar múltiplos observadores', () => {
      const universidade2 = new Universidade('UFRJ', 'Rio de Janeiro');
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      medidor.attach(universidade);
      medidor.attach(universidade2);
      
      medidor.changePh(5.5);
      
      expect(consoleSpy).toHaveBeenCalledTimes(2);
      
      consoleSpy.mockRestore();
    });

    it('deve remover um observador corretamente', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      medidor.attach(universidade);
      medidor.detach(universidade);
      
      medidor.changeTemperatura(40);
      
      expect(consoleSpy).not.toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });
  });

  describe('Múltiplas mudanças', () => {
    it('deve atualizar múltiplos valores sequencialmente', () => {
      medidor.changeTemperatura(28);
      expect(medidor.temperaturaValue).toBe(28);
      
      medidor.changePh(6.8);
      expect(medidor.phValue).toBe(6.8);
      
      medidor.changePressaoAtmosferica(1014);
      expect(medidor.pressaoAtmosfericaValue).toBe(1014);
      
      medidor.changeUmidadeRelativaDoAr(70);
      expect(medidor.umidadeRelativaDoArValue).toBe(70);
    });

    it('deve manter os valores anteriores quando novos são definidos', () => {
      medidor.changeTemperatura(32);
      medidor.changePh(6.5);
      
      expect(medidor.temperaturaValue).toBe(32);
      expect(medidor.phValue).toBe(6.5);
      expect(medidor.pressaoAtmosfericaValue).toBe(1013);
      expect(medidor.umidadeRelativaDoArValue).toBe(60);
    });
  });
});
