# HTML
-TAGS:
<h1> Tag utilizada para títulos;
<a href=""> Tag utilizada para links; 
<table> Tag utilizada para criar tabelas;
<thead> Cabeçalho;
<trow> Linhas da tabela;
<th> Nome das linhas



# CSS




# JS

``` JS
//variaveis
  const mensagem = `oi, tudo bem?`
//tipos de dados
  //number
  //string
// função

//objeto javascript
const participante = {
  nome: 'Felipe José'
  email: 'felipe@gmail.com'
  dataInscricao: new Date(2024, 2, 22, 19, 20)
  dataCheckIn: new Date(2024, 2, 22, 22, 00)
}

//array

let participantes = [
  {
  nome: 'Felipe José'
  email: 'felipe@gmail.com'
  dataInscricao: new Date(2024, 2, 22, 19, 20)
  dataCheckIn: new Date(2024, 2, 22, 22, 00)
  }
]

//estrutura de repetição - loop
  for(let participante of participantes) {
  output = output + criarNovoParticipante(participante)
  }
  //faça alguma coisa aqui
  //enquanto tiver participantes nessa lista


//condicional

    if (participante.dataCheckIn == null){
      dataCheckIn = ´
      <button 
      data-email='${participante.email}'
      onclick = "fazerCheckIn(event)">
      Confirmar check-in
      </button>
      ´
    }
```