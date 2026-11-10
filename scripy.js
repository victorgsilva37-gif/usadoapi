//linguagem de programação;

//const url ="https://viacep.com.br/ws/01001000/json/";

////fetch => pega os dados da API
////then => decida o que eu vou fazer com a resposta do fetch-
//fetch(url)
//.then(resposta=> resposta.json())
//.then(data=>{
//    console.log(data)
//})

function buscarapi(rota) {
  fetch("https://jsonplaceholder.typicode.com/" )
    .then(resposta=> resposta.json())
        .then(data=>{
        console.log("lista de " + rota)
        console.log(data)
        })
    }
buscarapi(posts)
buscarapi(users)

