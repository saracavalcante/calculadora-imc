const calculate = document.getElementById('calculate');

function imcCalc() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const imcResul = document.getElementById('imc');
    let imcClassification = document.getElementById('imc__classification');

    if (weight !== '' && height !== '') {
        const imcValue = (weight / (height * height)).toFixed(2);
        imcResul.textContent = imcValue;

        if (imcValue < 18.5) {
            imcClassification.textContent = 'Abaixo do peso';
        } else if (imcValue < 25) {
            imcClassification.textContent = 'Peso ideal';
        } else if (imcValue < 30) {
            imcClassification.textContent = 'Levemente acima do peso';
        } else if (imcValue < 35) {
            imcClassification.textContent = 'Obesidade grau I';
        } else if (imcValue < 40) {
            imcClassification.textContent = 'Obesidade grau II';
        } else {
            imcClassification.textContent = 'Obesidade grau III';
        }

    } else {
        imcClassification.textContent = 'Por favor, preencha todos os campos!';
    }
}

calculate.addEventListener('click', imcCalc);

