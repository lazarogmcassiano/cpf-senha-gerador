import ValueCPF from './modules/ValueCPF';
const buttoncpf = document.querySelector('.clickcpf')
function cpf (){
    buttoncpf.addEventListener('click', () => {
        const gera = new ValueCPF()
        const cpfGerado = document.querySelector('.cpf-gerado');
        cpfGerado.innerHTML = gera.geraNovoCpf();
        
    })
}