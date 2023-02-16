import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';

function App() {

  const [indiceVetor, setIndiceVetor] = useState('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [vetor, setVetor] = useState([]);

  // Função para Cadastrar
  const cadastrar = () => {
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade
    }
    setVetor([...vetor, obj]);

    setNome('');
    setIdade('');
    setCidade('');
  }

  // Função para Selecionar o usuário
  const selecionar = (indice) => {
    setIndiceVetor(indice);

    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    setBtnCadastrar(false)
  }

  // Função para Alterar os dados do usuário
  const alterar = () => {
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade
    }

    let copiaVetor = [...vetor];
    copiaVetor[indiceVetor] = obj;
    setVetor(copiaVetor);

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  }

  // Função para Remover o usuário
  const remover = () => {
    let copiaVetor = [...vetor];
    copiaVetor.splice(indiceVetor, 1);
    setVetor(copiaVetor);

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  }

  // Função para Cancelar a alteração ou remoção
  const cancelar = () => {
    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  }

  return (
    <div>
      <Formulario 
        btnCadastrar={btnCadastrar} 
        setNome={setNome} 
        setIdade={setIdade} 
        setCidade={setCidade} 
        cadastrar={cadastrar}
        nome={nome}
        idade={idade}
        cidade={cidade}
        alterar={alterar}
        remover={remover}
        cancelar={cancelar}
      />
      <Tabela 
        vetor={vetor}
        selecionar={selecionar}
      />
    </div>
  );
}

export default App;
