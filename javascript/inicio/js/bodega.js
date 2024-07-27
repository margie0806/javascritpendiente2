//crear una aplicacion para una bodega cuyos camiones solo pueden recibir yo toneladas de peso//
let pesoTotal = 0;
const pesoMaximo = 70; // 70 toneladas

function agregarPaquete() {
    const inputPeso = document.getElementById('peso');
    let pesoPaquete = parseFloat(inputPeso.value);

    while (pesoTotal + pesoPaquete <= pesoMaximo) {
        if (isNaN(pesoPaquete) || pesoPaquete <= 0) {
            alert('Por favor, ingrese un peso válido.');
            return;
        }

        pesoTotal += pesoPaquete;
        document.getElementById('resultado').innerText = `Paquete agregado. Peso total: ${pesoTotal.toFixed(2)} toneladas.`;

        inputPeso.value = '';
        pesoPaquete = parseFloat(prompt('Ingrese el peso del siguiente paquete:'));

        if (isNaN(pesoPaquete) || pesoPaquete <= 0) {
            alert('Por favor, ingrese un peso válido.');
            return;
        }
    }

    document.getElementById('resultado').innerText = `No se puede agregar el paquete. Excede el límite de ${pesoMaximo} toneladas. Peso total: ${pesoTotal.toFixed(2)} toneladas.`;
    inputPeso.value = '';
}



