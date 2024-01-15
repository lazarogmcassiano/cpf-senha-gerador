const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const genUppercase = () => String.fromCharCode(rand(65, 91));
const genLowercase = () => String.fromCharCode(rand(97, 123));
const genNumber = () => String.fromCharCode(rand(48, 58));
const symbols = '!@$%&*+-_'
const genSymbol = () => symbols[rand(0, symbols.length)];

function passwordGenerator(qtd, lowercase, uppercase, numeros, symbols) {
    const passwordArray = [];
    qtd = Number(qtd);
    
    for (let i = 0; i < qtd; i++) {
        lowercase && passwordArray.push(genUppercase());
        uppercase && passwordArray.push(genLowercase());
        numeros && passwordArray.push(genNumber());
        symbols && passwordArray.push(genSymbol());
    }
    return passwordArray.join('').slice(0, qtd)
    
}



export {passwordGenerator as password}

