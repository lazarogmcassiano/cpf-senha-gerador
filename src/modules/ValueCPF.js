// 705.484.450-52 070.987.720-03
export default class ValueCPF {
  constructor(sendCPF) {
    Object.defineProperty(this, 'cpfClear', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: sendCPF.replace(/\D+/g, '')
    });
  }

  digitOrder() {
    return this.cpfClear.charAt(0).repeat(11) === this.cpfClear;
  }

  generatorNewCPF() {
    const cpfNoDigit = this.cpfClear.slice(0, -2);
    const digit1 = ValueCPF.genDigit(cpfNoDigit);
    const digit2 = ValueCPF.genDigit(cpfNoDigit + digit1);
    this.newCPF = cpfNoDigit + digit1 + digit2;
  }

  static genDigit(cpfNoDigit) {
    let total = 0;
    let reverso = cpfNoDigit.length + 1;

    for(let stringNumerica of cpfNoDigit) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  valida() {
    if(!this.cpfClear) return false;
    if(typeof this.cpfClear !== 'string') return false;
    if(this.cpfClear.length !== 11) return false;
    if(this.digitOrder()) return false;
    this.generatorNewCPF();

    return this.newCPF === this.cpfClear;
  }
}
