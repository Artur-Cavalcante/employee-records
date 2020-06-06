export default function validateCpf(cpf) {
    let sum = 0;
    let multiplicator = 10;
    let tenthNumber = 0;
    let eleventhNumber = 0;

    //First Step
    for (let i = 0; i <= 8; i++) {
        sum += cpf[i] * multiplicator;
        multiplicator -= 1;
    };
    if (!((sum % 11) === 0) || ((sum % 11) === 1)) {
        tenthNumber = 11 - (sum % 11);
    }
    
    ///Second Step
    multiplicator = 11;
    sum = 0;

    for (let i = 0; i <= 9; i++) {
        sum += cpf[i] * multiplicator;
        multiplicator -= 1;
    };
    if (!((sum % 11) === 0) || ((sum % 11) === 1)) {
        eleventhNumber = 11 - (sum % 11);
    };
    
    //Check tenthNumber and eleventhNumber
    if((tenthNumber == cpf[9]) && (eleventhNumber == cpf[10])){
        return true;
    }else{
        return false;
    };
};