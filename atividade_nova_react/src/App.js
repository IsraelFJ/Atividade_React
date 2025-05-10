import { useState } from 'react';
import './App.css';
import logo from './assets/images/logoTonho.png';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {
  
  const [usuarios, setUsuarios] = useState(['Tonho', 'Martinha', 'Vicente']);
  const [pratos, setPratos] = useState(['Rubacão', 'Frango caipira', 'Baião de Dois']);
  
  const adicionarUsuario = (novoUsuario) =>{
    if (usuarios.includes(novoUsuario)){
      alert('Usuario já existe na lista');
      return;
    }
    setUsuarios([...usuarios, novoUsuario]);
  }
  const adicionarPratos = (novoPrato) =>{
    if (pratos.includes(novoPrato)){
      alert('Usuario já existe na lista');
      return;
    }
    setPratos([...pratos, novoPrato]);
  }

  const adicionarPedidos = () =>{
    adicionarUsuario()
    adicionarPratos()
  }

  return (
   <div className='App'>
    <img src = {logo} alt='Logo wilson png ' className='logo'/>
    <hr/>
    <UserInput onAdduser={adicionarPedidos}/>
    <hr/>
    <UserList usuarios={usuarios}/>

   </div>
  );
 
}

export default App;