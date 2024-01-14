import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';
import formGeraSenha from './modules/formGeraSenha';

const buttoncpf = document.querySelector('.clickcpf')
function cpf (){
    buttoncpf.addEventListener('click', () => {
        const gera = new GeraCPF()
        const cpfGerado = document.querySelector('.cpf-gerado');
        cpfGerado.innerHTML = gera.geraNovoCpf();
        
    })
}
cpf();
formGeraSenha();