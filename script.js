class Maquina {

    constructor(EffectElement) {
        this.EffectElement = document.querySelector(EffectElement);
    }

    typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 75 * i);
        });
    }
    init() {
        this.typeWriter(this.EffectElement);
    }

}
const MaquinaStart = new Maquina('h1');

MaquinaStart.init();
