class validCPF {


    validacaoMat(cpf) {
        let digito1 = 0;
        let digito2 = 0;
        let valido = false;
        if (cpf.length === 11) {
            digito1 = parseInt(cpf.substring(0, 1)) * 10;
            digito1 = parseInt(cpf.substring(1, 2)) * 9 + digito1;
            digito1 = parseInt(cpf.substring(2, 3)) * 8 + digito1;
            digito1 = parseInt(cpf.substring(3, 4)) * 7 + digito1;
            digito1 = parseInt(cpf.substring(4, 5)) * 6 + digito1;
            digito1 = parseInt(cpf.substring(5, 6)) * 5 + digito1;
            digito1 = parseInt(cpf.substring(6, 7)) * 4 + digito1;
            digito1 = parseInt(cpf.substring(7, 8)) * 3 + digito1;
            digito1 = parseInt(cpf.substring(8, 9)) * 2 + digito1;
            digito1 = (11 - (digito1 % 11));

            if (digito1 > 9) {
                digito1 = 0;
            }
            digito2 += parseInt(cpf.substring(0, 1)) * 11;
            digito2 += parseInt(cpf.substring(1, 2)) * 10;
            digito2 += parseInt(cpf.substring(2, 3)) * 9;
            digito2 += parseInt(cpf.substring(3, 4)) * 8;
            digito2 += parseInt(cpf.substring(4, 5)) * 7;
            digito2 += parseInt(cpf.substring(5, 6)) * 6;
            digito2 += parseInt(cpf.substring(6, 7)) * 5;
            digito2 += parseInt(cpf.substring(7, 8)) * 4;
            digito2 += parseInt(cpf.substring(8, 9)) * 3;
            digito2 += digito1 * 2;
            digito2 = (11 - (digito2 % 11) <= 9) ? (11 - digito2 % 11) : 0;
            valido = parseInt(cpf.substring(9, 11)) == digito1 * 10 + digito2;

            return true;
        }

        else {
            return false;
        }
    }
    validacaoRepetido(cpf) {
        if (cpf == "00000000000"
            || cpf === "11111111111"
            || cpf === "22222222222"
            || cpf === "33333333333"
            || cpf === "44444444444"
            || cpf === "55555555555"
            || cpf === "66666666666"
            || cpf === "77777777777"
            || cpf === "88888888888"
            || cpf === "99999999999") {
            return false;
        }
        else {
            return true
        }
    }

    validarCPF(cpf) {
        if (typeof cpf !== 'string' || cpf.length !== 11 || /[^0-9]/.test(cpf)) {
            return false;
        }
        else {
            return true;
        }
    }




}

module.exports = validCPF;