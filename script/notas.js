



addButton = () => {

    
var chamado = document.querySelector("#incidente")
var site = document.querySelector("#site")
var operacao = document.querySelector("#operação")
var assunto = document.querySelector("#assunto")
var descricao = document.querySelector("#descricao")
var atualização = document.querySelector("#atualização")

create(chamado.value, site.value, operacao.value, assunto.value, descricao.value, atualização.value);

};

create = (cha, sit, op, ass, desc, att) =>{
    var data = {
        chamado: cha,
        site: sit,
        operacao: op,
        assunto: ass,
        descricao: desc,
        atualização: att

    };

    return firebase.database().ref().child('incidents').push(data);
};

/*
formInc = (evento) => {
    evento.preventDefault();

    const dados = document.querySelector("#formNotas");
    const form = new FormData(dados);

    const output = document.querySelector("#form_res")
    

    for (const [key, value] of form) {
        output.innerHTML += `*${key}:* ${value}<br>`;
      }
      console.log(output)

}


copy = () =>{
    const outputRes = document.querySelector("#form_res").innerText

    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);

    console.log(outputRes)
}

*/