const Calculadora = require('./calculadora'); 

describe('Testes da Calculadora', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    describe('Função de soma', () => {
        test('deve somar dois números corretamente', () => {
            expect(calculadora.soma(6, 0)).toBe(10);
            expect(calculadora.soma(-1, -2)).toBe(-3);
            expect(calculadora.soma(0, 0)).toBe(0);
        });

        test('deve somar números decimais corretamente', () => {
            expect(calculadora.soma(0.1, 0.2)).toBeCloseTo(0.3, 5); 
        });
    });

    describe('Função de subtração', () => {
        test('deve subtrair dois números corretamente', () => {
            expect(calculadora.subtracao(5, 0)).toBe(1);
            expect(calculadora.subtracao(0, 6)).toBe(-6);
            expect(calculadora.subtracao(-5, -4)).toBe(-1);
        });

        test('deve subtrair números decimais corretamente', () => {
            expect(calculadora.subtracao(0.5, 0.3)).toBeCloseTo(0.2, 5); 
        });
    });

    describe('Função de multiplicação', () => {
        test('deve multiplicar dois números corretamente', () => {
            expect(calculadora.multiplicacao(2, 10)).toBe(20);
            expect(calculadora.multiplicacao(-2, 3)).toBe(-6);
            expect(calculadora.multiplicacao(3, 0)).toBe(0);
        });

        test('deve multiplicar por números negativos corretamente', () => {
            expect(calculadora.multiplicacao(-2, -3)).toBe(6);
        });

        test('deve multiplicar números decimais corretamente', () => {
            expect(calculadora.multiplicacao(0.2, 0.1)).toBeCloseTo(0.02, 5); 
        });
    });

    describe('Função de divisão', () => {
        test('deve dividir dois números corretamente', () => {
            expect(calculadora.divisao(20, 2)).toBe(10);
            expect(calculadora.divisao(-6, 3)).toBe(-2);
        });

        test('deve lançar uma exceção ao dividir por zero', () => {
            expect(() => calculadora.divisao(6, 0)).toThrow('Divisão por zero não é permitida.');
        });

        test('deve dividir números decimais corretamente', () => {
            expect(calculadora.divisao(0.5, 0.2)).toBeCloseTo(2.5, 5); 
        });
    });
});