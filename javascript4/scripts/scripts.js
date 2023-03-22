function validaIdade(){
    ano = document.getElementById('ano');

    idade = 2023 - idade;

    if(idade < 18){
        document.getElementById('erros').innerText='Idade Insuficiente';
        return false;
    } else {
        return true; 
    }
}