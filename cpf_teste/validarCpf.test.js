const ValidCPF = require('./validarCpf');


describe('Teste do CPF', () => {
    let validCPF;

    beforeEach(() => {
        validCPF = new ValidCPF();
    });

    describe('Validação de CPF Repetido', () => {

        test('Entrada de CPFs inválidos conhecidos', () => {
            expect(validCPF.validacaoRepetido('00000000000')).toBe(false);
            expect(validCPF.validacaoRepetido('11111111111')).toBe(false);
            expect(validCPF.validacaoRepetido('22222222222')).toBe(false);
            expect(validCPF.validacaoRepetido('33333333333')).toBe(false);
            expect(validCPF.validacaoRepetido('44444444444')).toBe(false);
            expect(validCPF.validacaoRepetido('55555555555')).toBe(false);
            expect(validCPF.validacaoRepetido('66666666666')).toBe(false);
            expect(validCPF.validacaoRepetido('77777777777')).toBe(false);
            expect(validCPF.validacaoRepetido('88888888888')).toBe(false);
            expect(validCPF.validacaoRepetido('99999999999')).toBe(false);
        });
    });

    describe('Validação de Estrutura do CPF', () => {
        test('Entrada de CPF com formato inválido (com pontuação)', () => {
            expect(validCPF.validarCPF('911.159.846-00')).toBe(false);
        });

        test('Entrada de CPF com letras', () => {
            expect(validCPF.validarCPF('abcdefghi012')).toBe(false);
        });

        test('Entrada de CPF com menos de 11 dígitos', () => {
            expect(validCPF.validarCPF('1234567')).toBe(false);
        });

        test('Entrada de CPF com mais de 11 dígitos', () => {
            expect(validCPF.validarCPF('12345678912345')).toBe(false);
        });

        test('Entrada nula ou vazia', () => {
            expect(validCPF.validarCPF('')).toBe(false);
        });
    });

    describe('Validação de CPF Numero', () => {
        test('Entrada de CPFs válidos', () => {
           
            expect(validCPF.validacaoMat('17688810736')).toBe(true);
            expect(validCPF.validacaoMat('13590117737')).toBe(true);
        });
    });

});