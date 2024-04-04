let participantes = [
  {
    nome: 'Felipe José',
    email: 'felipe@gmail.com',
    dataInscricao: new Date(2024, 2, 31, 19, 20),
    dataCheckIn: null
  },
  {
    nome: 'Maria Silva',
    email: 'maria@gmail.com',
    dataInscricao: new Date(2024, 2, 20, 18, 10),
    dataCheckIn: new Date(2024, 2, 22, 21, 30)
  },
  {
    nome: 'João Pereira',
    email: 'joao@gmail.com',
    dataInscricao: new Date(2024, 2, 18, 17, 45),
    dataCheckIn: new Date(2024, 2, 22, 20, 45)
  },
  {
    nome: 'Ana Souza',
    email: 'ana@gmail.com',
    dataInscricao: new Date(2024, 2, 15, 16, 30),
    dataCheckIn: new Date(2024, 2, 22, 19, 55)
  },
  {
    nome: 'Lucas Santos',
    email: 'lucas@gmail.com',
    dataInscricao: new Date(2024, 2, 12, 15, 20),
    dataCheckIn: new Date(2024, 2, 22, 19, 45)
  },
  {
    nome: 'Juliana Oliveira',
    email: 'juliana@gmail.com',
    dataInscricao: new Date(2024, 2, 10, 14, 40),
    dataCheckIn: new Date(2024, 2, 22, 21, 15)
  },
  {
    nome: 'Pedro Costa',
    email: 'pedro@gmail.com',
    dataInscricao: new Date(2024, 2, 8, 13, 55),
    dataCheckIn: new Date(2024, 2, 22, 20, 30)
  },
  {
    nome: 'Mariana Rodrigues',
    email: 'mariana@gmail.com',
    dataInscricao: new Date(2024, 2, 5, 12, 25),
    dataCheckIn: new Date(2024, 2, 22, 22, 20)
  },
  {
    nome: 'Carlos Almeida',
    email: 'carlos@gmail.com',
    dataInscricao: new Date(2024, 2, 3, 11, 15),
    dataCheckIn: new Date(2024, 2, 22, 23, 10)
  },
  {
    nome: 'Patrícia Lima',
    email: 'patricia@gmail.com',
    dataInscricao: new Date(2024, 2, 1, 10, 40),
    dataCheckIn: new Date(2024, 2, 22, 21, 50)
  }
];

const criarNovoParticipante = (participante) => {
  
    const dataInscricao = dayjs(Date.now()).to
    (participante.dataInscricao)

    let dataCheckIn = dayjs(Date.now()).to
    (participante.dataCheckIn)

    //condicional

    if(participante.dataCheckIn == null){
      dataCheckIn = `
      <button
      data-email="${participante.email}" 
      onclick ='fazerCheckIn(event)'>
      Confirmar Check-In
      </button>
      `
    }
  
  return ` 
    <tr>
      <td>
          <strong>
          ${participante.nome}
          </strong>
          <br>
          <small>
          ${participante.email}
          </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `
}


const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes) {
  output = output + criarNovoParticipante(participante)
  }

  //substituir informação do HTML
document.
querySelector('tbody').
innerHTML= output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    //alert(dadosDoFormulario.get('nome'))

    const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      dataCheckIn: null
    }


    //verificar se o participante existe

    const participanteExiste = participantes.find(
      (p) => {
        return p.email == participante.email

    }
    )

    if(participanteExiste) {
      alert('E-mail já cadastrado')
      return
    }


  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulário
  event.target.querySelector('[name="nome"]').value= ""
  event.target.querySelector('[name="email"]').value=""

}

const fazerCheckIn = (event) => {
  //confirmar se realmente quer fazer o check-in
  const mensagemAfirmacao = 'Você deseja realizar o check-in?'
  if (confirm(mensagemAfirmacao) == false) {
    return
  }

  alert(resultado) // true ou false = boolean

  //encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  //atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  //atualizar a lista de participantes

  atualizarLista(participantes)

}