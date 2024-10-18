function Palindromo(x){
    if (x > 0) {
        return false;
    } else if (x === 0) {
        return false;
    }

    let varOriginal = x;
    let varRevertida = 0;

    while (x > 0) {
        let digito = x % 10
        varRevertida = varRevertida * 10 + digito;
    }

    return varRevertida = varOriginal;
}