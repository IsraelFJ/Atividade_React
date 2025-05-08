import { useState } from 'react';
import './App.css';

function App() {
  // hook é uma função que ´permite adicionar o esrado a um componente.
  const [usuario, setUsuario] = useState('')
  const [usuarios, setUsuarios]  = useState(['Tonho', 'Martinha', 'Vicente']);
  const [prato, setPrato] = useState('')
  const [pratos, setPratos] = useState(['Baião de Dois', 'Vaca Atolada', 'Feijão Tropeiro'])
 
 
 

    const adicionarUsuario = () => {
    /*  if (usuarios.includes(usuario)){ removendo a logica que impede que ocorra repetição po conta do tema da atividade
        alert('Usuário já existe na lista.');
        return;
      }*/
      // adicionar novo usuario na lista
      setUsuarios([...usuarios, usuario]);
      // limpa o campo de entrada 
      setUsuario('') 
    }
    
    const adicionarPratos = () => {
     /* if (pratos.includes(prato)){
        alert('O Usuarioo já pediu esse prato.');
        return;
      }*/
      // adicionar novo usuario na lista
      setPratos([...pratos, prato]);
      // limpa o campo de entrada 
      setPrato('') 
    }

   const adicionarPratoEUsuario = () =>{
    adicionarUsuario()
    adicionarPratos()
   }

   
  
  return (
    <div className='App'>
      <h1>Cadastro de Cliente</h1>
      <img src="https://www.shoppingtambia.com.br/fotos/estabelecimento/9e3e1aaefc8b85e3e0e89720384190bf_logo_188.png" alt="Logo da empresa" className="logo" />
      <hr/>
      <h2>Adicionar Pedidos</h2>
      <input type='text' placeholder='Digite seu nome' value={usuario} 
      onChange={(e) => setUsuario(e.target.value)}
      />
      <input type='text' placeholder='Digite seu pedido' value={prato} 
      onChange={(e) => setPrato(e.target.value)}
      />

      <button onClick={adicionarPratoEUsuario}>Adicionar</button>
      <hr/>

     <div className='pedidos'>
      <ol>
        {usuarios.map((usuario, index) => (<li key={index}>{usuario}</li>))}
      </ol>
      <ol>
        {pratos.map((prato, index) => (<li key={index}>{prato}</li>))}
      </ol>
      </div>

    </div>
   );
}

export default App;