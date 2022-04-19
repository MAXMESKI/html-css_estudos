const CPFValidade = (cpf) => {
    let result = cpf.replaceAll('.', '');
    return result.replaceAll('-', '')
}

console.log( CPFValidade('089.310.851-90') )