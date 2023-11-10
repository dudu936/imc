function calcImc(altura, peso){
    let result = peso / (altura * altura);
    return result 
}

function clean(){
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let p = document.querySelector('#parId')
    peso.value = ""
    altura.value = ""
    p.textContent = 'Informe um valor'
    
}

function innerResult(event) {
    event.preventDefault();

    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);
    let result = calcImc(altura, peso);
    let fixed = result.toFixed(2)
    let p = document.querySelector('#parId');
    if (fixed == 'NaN'){
        p.textContent = 'Preencha os valores corretamente'
    }
    else{
        p.textContent = 'Seu IMC é: ' + fixed;
    }

}



