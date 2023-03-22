function validaFormulario(){
    alert('entrei');

    nome_inserido= document.getElementById("nome").value; 

    morada_inserida= document.getElementById("morada").value;

    console.log(nome_inserido);
    console.log(morada_inserida);

    //alert('já li os valores');
    if(nome_inserido !='' || morada_inserida !=''){
        alert('dados corretos')
    } else {
        document.getElementById("zona-de-erro").innerText="DADOS INCORRETOS";
        //alert('DADOS INCORRETOS!!')
        return false;
    }

}

function validaFormularioMelhor(){
    document.getElementById('obrigatorio_nome').style.display='none';
    document.getElementById('obrigatorio_morada').style.display='none';
    document.getElementById('zona-de-erro').innerText='';

    nome_inserido= document.getElementById("nome").value; 

    morada_inserida= document.getElementById("morada").value;

    if(nome_inserido==''){
        document.getElementById('obrigatorio_nome').style.display='block';
    }

    if(morada_inserida==''){
        document.getElementById('obrigatorio_morada').style.display='block';
    }

    if(nome_inserido=='' || morada_inserida==''){
        document.getElementById("zona-de-erro").innerText='*Preencha os campos assinalados.';
        return false;
    } else {
        return true;
    }
}