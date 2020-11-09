function verificarPromo(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    console.log(nome);
    console.log(email);

    let preenchido = true;
    let mensagens = [];

    if (nome == '') {
        preenchido = false;
        mensagens.push(' Nome não preenchido');
        document.getElementById('nome').style.backgroundColor = '#F18282'
    }

    if (email == '') {
        preenchido = false;
        mensagens.push(' E-mail não preenchido');
        document.getElementById('email').style.backgroundColor = '#F18282'
    }

    if (mensagens.length > 0) {
        document.getElementById('aviso').innerHTML = mensagens;
        document.getElementById('aviso').style.backgroundColor = '#FFB942'
    }

    return preenchido;
}
