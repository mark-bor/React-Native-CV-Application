// SYMBOLS ARRAYS 
const arrays = {
    numers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    small_Letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    big_Letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    symbols: ['/', '*', '-', '_', ')', '.', '$'],
};

// Функція генерує масив символів по чекбоксам та повертає рандомний символ
function Colaps(parameters) {
    let result = [];

    if (parameters.numerics) result.push(arrays.numers[Math.floor(Math.random() * arrays.numers.length)]);
    if (parameters.smallLiters) result.push(arrays.small_Letters[Math.floor(Math.random() * arrays.small_Letters.length)]);
    if (parameters.bigLiters) result.push(arrays.big_Letters[Math.floor(Math.random() * arrays.big_Letters.length)]);
    if (parameters.characters) result.push(arrays.symbols[Math.floor(Math.random() * arrays.symbols.length)]);

    const res_len = result.length
    if (res_len === 0) {return '';} 
    else {return result[Math.floor(Math.random() * res_len)];}
}

// перевірка повторювання символів та додавання символу у список паролів
function CheckedRemuv(password, parameters) {
    if (parameters.repeating){
        let item = Colaps(parameters);
        if (password.split('').includes(item)) {return CheckedRemuv(password, parameters);}
        return item;
    } else { return Colaps(parameters); }
}

export function generate(parameters, setPasswords) {
    let pass = [];
    for (let j=1; j<=parameters.quantity; j++) {
        pass[j] = [];
        for (let i=1; i<=parameters.length; i++) {
            pass[j].push(CheckedRemuv(pass[j], parameters));
        }
        pass[j]?.join('');
    }
    setPasswords([...pass]);
}