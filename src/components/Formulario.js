import React from "react";

function Formulario( {
    btnCadastrar, 
    setNome, 
    setIdade, 
    setCidade, 
    cadastrar, 
    nome, 
    idade, 
    cidade, 
    alterar,
    remover,
    cancelar
    }) {

    return(
        <form>
            <input 
                type='text' 
                placeholder='Nome' 
                className='form-control' 
                onChange={e => setNome(e.target.value)} 
                value={nome}
            />
            <input 
                type='text' 
                placeholder='Idade' 
                className='form-control' 
                onChange={e => setIdade(e.target.value)} 
                value={idade}
            />
            <input
                type='text' 
                placeholder='Cidade' 
                className='form-control' 
                onChange={e => setCidade(e.target.value)} 
                value={cidade}
            />

            { 
                btnCadastrar 
                ? 
                <input 
                type='button' 
                value='Cadastrar' 
                className='btn btn-primary' 
                onClick={cadastrar} 
                />
                : 
                <div>
                    <input 
                    type='button' 
                    value='Alterar' 
                    className='btn btn-success'
                    onClick={alterar} 
                    />
                    <input 
                    type='button' 
                    value='Excluir' 
                    className='btn btn-danger' 
                    onClick={remover}
                    />
                    <input 
                    type='button' 
                    value='Cancelar'
                    className='btn btn-secondary'
                    onClick={cancelar}  
                    />
                </div>
            }
        </form>
    );
}

export default Formulario;